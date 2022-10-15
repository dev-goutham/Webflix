import CardSkeleton from '@/components/CardSkeleton';
import LoginButton from '@/components/LoginButton';
import OverlayCard from '@/components/OverlayCard';
import useApiQuery from '@/hooks/useApiQuery';
import { useAuth } from '@/hooks/useAuth';
import useBookmarks from '@/hooks/useBookmarks';
import useScrollToTop from '@/hooks/useScrollToTop';
import isMovieExtended from '@/utils/isMovieExtended';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { IMovieExtended } from 'typings/IMovieExtended';
import { ITvExtended } from 'typings/ITExtended';

const Bookmarks: React.FC<PropsWithChildren> = () => {
  useScrollToTop();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <BookmarksSection />;
  } else {
    return (
      <div className='flex items-center h-screen max-h-[calc(100vh-198px)] md:max-h-[calc(100v-80px)] justify-center'>
        <div className='rounded-md w-[350px] shadow-lg bg-stone-200 p-4 dark:bg-slate-700'>
          <h1 className='text-2xl text-center'>
            Login With Google to view your bookmarked media
          </h1>
          <div className='py-4 flex justify-center'>
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }
};

const BookmarksSection: React.FC = () => {
  const {
    bookmarks: { movies, tv },
  } = useBookmarks();

  return (
    <section className='my-4 space-y-6'>
      <div>
        <h1 className='text-xl mb-2 '>Bookmarked Movies</h1>
        <div className='max-w-screen justify-center lg:justify-start flex gap-4 flex-wrap'>
          {movies.map((id) => (
            <BookmarkCard key={id} id={id} type='movie' />
          ))}
        </div>
      </div>
      <div>
        <h1 className='text-xl mb-2 '>Bookmarked Tv Shows</h1>
        <div className='max-w-screen justify-center lg:justify-start flex gap-4 flex-wrap'>
          {tv.map((id) => (
            <BookmarkCard key={id} id={id} type='tv' />
          ))}
        </div>
      </div>
    </section>
  );
};

const BookmarkCard: React.FC<{ id: number; type: 'movie' | 'tv' }> = ({
  id,
  type,
}) => {
  const { data } = useApiQuery<IMovieExtended | ITvExtended>({
    path: `${type}/${id}`,
    tags: [type, `${id}`],
  });
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (data) {
      const t = isMovieExtended(data) ? data.title : (data!.name as string);
      setTitle(t);
    }
  }, [data]);

  return (
    <div>
      {data ? (
        <OverlayCard
          id={data.id}
          imageUrl={'http://image.tmdb.org/t/p/w500' + data.backdrop_path}
          title={title}
          type={type}
          year='2022'
        />
      ) : (
        <CardSkeleton />
      )}
    </div>
  );
};

export default Bookmarks;
