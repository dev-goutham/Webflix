import { useAuth } from '@/hooks/useAuth';
import axios from 'axios';
import React, { createContext, PropsWithChildren, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

interface BookmarkDto {
  type: 'movies' | 'tv';
  id: number;
}

interface IBookmarksContext {
  bookmarks: { tv: number[]; movies: number[] };
  addBookmarks: (bookmarks: BookmarkDto) => void;
  removeBookmark: (bookmark: BookmarkDto) => void;
}

export const BoomkarksContext = createContext<IBookmarksContext>(
  {} as IBookmarksContext,
);

const BookmarksProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { accessToken } = useAuth();
  const [tvBookmarks, setTvBookmarks] = useState<number[]>([]);
  const [movieBookmarks, setMovieBookmarks] = useState<number[]>([]);
  const queryClient = useQueryClient();
  useQuery(
    'bookmarks',
    async () =>
      (
        await axios.get<{ tv: number[]; movies: number[] }>(
          `/.netlify/functions/get-bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        )
      ).data,
    {
      enabled: accessToken !== null,
      onSuccess: ({ movies, tv }) => {
        setTvBookmarks(tv);
        setMovieBookmarks(movies);
      },
      staleTime: Infinity,
    },
  );

  const { mutate: addBookmarks } = useMutation(
    (bookmark: BookmarkDto) => {
      return axios.post(`/api/.netlify/functions/add-bookmark`, bookmark, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    {
      async onMutate(data) {
        queryClient.setQueryData(['bookmarks'], (old: any) => {
          return {
            movies:
              data.type === 'movies' ? [...old.movies, data.id] : old.movies,
            tv: data.type === 'tv' ? [...old.tv, data.id] : old.tv,
          };
        });
      },
      onSettled() {
        queryClient.invalidateQueries(['bookmarks']);
      },
      onError() {
        queryClient.invalidateQueries(['bookmarks']);
      },
    },
  );

  const { mutate: removeBookmark } = useMutation(
    (bookmark: BookmarkDto) =>
      axios.post<unknown>(`/api/.netlify/functions/remove-bookmark`, bookmark, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    {
      onMutate(data) {
        queryClient.setQueryData(['bookmarks'], (old: any) => {
          return {
            movies:
              data.type === 'movies'
                ? old.movies.filter((id: number) => id !== data.id)
                : old.movies,
            tv:
              data.type === 'tv'
                ? old.tv.filter((id: number) => id !== data.id)
                : old.tv,
          };
        });
      },
      onSettled() {
        queryClient.invalidateQueries(['bookmarks']);
      },
    },
  );

  return (
    <BoomkarksContext.Provider
      value={{
        bookmarks: {
          movies: movieBookmarks,
          tv: tvBookmarks,
        },
        removeBookmark,
        addBookmarks,
      }}
    >
      {children}
    </BoomkarksContext.Provider>
  );
};

export default BookmarksProvider;
