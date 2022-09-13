import { useLayoutEffect } from 'react';

const useScrollToTop = () => {
  useLayoutEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
};

export default useScrollToTop;
