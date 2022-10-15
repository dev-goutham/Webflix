import useBookmarks from '@/hooks/useBookmarks';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface Props extends PropsWithChildren {
  id: number;
  type: 'movies' | 'tv';
}

const BookmarkComponent: React.FC<Props> = ({ id, type }) => {
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
    if (isBookmarked !== null && !isBookmarked) {
      addBookmarks({
        id,
        type,
      });
    } else if (isBookmarked) {
      removeBookmark({
        id,
        type,
      });
    }
  };

  return (
    <button onClick={clickHandler}>
      {isBookmarked ? (
        <AiFillHeart className='text-[#d61a27] h-6 w-6' />
      ) : (
        <AiOutlineHeart className='h-6 w-6 ' />
      )}
    </button>
  );
};

export default BookmarkComponent;
