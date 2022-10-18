import { useAuth } from '@/hooks/useAuth';
import useBookmarks from '@/hooks/useBookmarks';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Toaster, toast } from 'react-hot-toast';

interface Props extends PropsWithChildren {
  id: number;
  type: 'movies' | 'tv';
}

const BookmarkComponent: React.FC<Props> = ({ id, type }) => {
  const { isAuthenticated } = useAuth();
  const { bookmarks, addBookmarks, removeBookmark } = useBookmarks();
  const [isBookmarked, setIsBookmarked] = useState<boolean | null>(null);
  useEffect(() => {
    const isLiked =
      type === 'movies'
        ? bookmarks.movies.includes(id)
        : bookmarks.tv.includes(id);

    setIsBookmarked(isLiked);
  }, [bookmarks.movies.length, bookmarks.tv.length]);

  const clickHandler = () => {
    if (!isAuthenticated) {
      toast.error('Login to bookmark your favourite movies and tv shows');
      return;
    }
    if (isBookmarked !== null && !isBookmarked) {
      addBookmarks({
        id,
        type,
      });
      toast.success('Added to your bookmarks');
    } else if (isBookmarked) {
      removeBookmark({
        id,
        type,
      });
      toast.success('Removed from your bookmarks');
    }
  };

  return (
    <>
      <Toaster />
      <button onClick={clickHandler}>
        {isBookmarked ? (
          <AiFillHeart className='text-[#d61a27] h-6 w-6' />
        ) : (
          <AiOutlineHeart className='h-6 w-6 ' />
        )}
      </button>
    </>
  );
};

export default BookmarkComponent;
