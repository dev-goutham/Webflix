import React, { PropsWithChildren, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

interface Props extends PropsWithChildren {
  numberOfPages: number;
  currentPage: number;
}

const Pagination: React.FC<Props> = ({ currentPage, numberOfPages }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const prevPath: string | undefined = useMemo(() => {
    if (currentPage <= 1) {
      return undefined;
    } else {
      return `${pathname}?page=${currentPage - 1}`;
    }
  }, [pathname, currentPage, numberOfPages]);

  const nextPath: string | undefined = useMemo(() => {
    if (currentPage >= numberOfPages) {
      return undefined;
    } else {
      return `${pathname}?page=${currentPage + 1}`;
    }
  }, [pathname, currentPage, numberOfPages]);

  return (
    <div className='flex'>
      <button
        className='px-4 py-2 rounded-l-md dark:bg-slate-600 bg-slate-300 
          disabled:opacity-20 flex items-center gap-4 disabled:cursor-not-allowed
        '
        disabled={prevPath === undefined}
        onClick={() => {
          navigate(prevPath!);
        }}
      >
        <span>
          <HiOutlineArrowNarrowLeft size={24} />
        </span>
        <span>Prev</span>
      </button>

      <div className='px-4 py-2 dark:bg-slate-300 dark:text-slate-800 bg-slate-800 text-slate-300'>
        Page {currentPage} of {numberOfPages}
      </div>
      <button
        disabled={nextPath === undefined}
        className='px-4 py-1 flex items-center gap-4 rounded-r-md dark:bg-slate-600 bg-slate-300'
        onClick={() => {
          navigate(nextPath!);
        }}
      >
        <span>Next</span>
        <span>
          <HiOutlineArrowNarrowRight size={24} />
        </span>
      </button>
    </div>
  );
};

export default Pagination;
