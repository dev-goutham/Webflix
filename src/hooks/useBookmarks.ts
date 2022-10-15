import { BoomkarksContext } from '../context/bookmarks/BookmarksContext';
import { useContext } from 'react';

const useBookmarks = () => {
  return useContext(BoomkarksContext);
};

export default useBookmarks;
