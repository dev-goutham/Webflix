import useApiQuery from '@/hooks/useApiQuery';
import React, { PropsWithChildren, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import HeroImage from '@/components/HeroImage';
import HeroSkeleton from '@/components/HeroSkeleton';

const HeroSection: React.FC<PropsWithChildren> = () => {
  const { data, isLoading } = useApiQuery<QueryResult<IMovie>>({
    path: 'movie/now_playing',
    tags: ['movies', 'now_playing', '1'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const onLeftButtonClick = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return 19;
      } else {
        return prev - 1;
      }
    });
  };

  const onRightButtonClick = () => {
    setCurrentIndex((prev) => {
      if (prev === 19) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div>
      <div className='flex justify-between items-baseline mb-4'>
        <div className='flex items-baseline gap-4'>
          <h3 className='text-2xl capitalize'>Now Playing</h3>
          <div className='px-2 py-1 text-[9px] uppercase leading-none border-2 rounded-md border-gray-200'>
            movie
          </div>
        </div>
        <Link
          className='mr-4 text-slate-500 hover:text-blue-700'
          to={`/movies/now_playing?page=1`}
        >
          See more
        </Link>
      </div>
      {data && (
        <div>
          <HeroImage
            onLeftButtonClick={onLeftButtonClick}
            onRightButtonClick={onRightButtonClick}
            movie={data.results[currentIndex]}
            key={data.results[currentIndex].id}
          />
        </div>
      )}
      {isLoading && <HeroSkeleton />}
    </div>
  );
};

export default HeroSection;
