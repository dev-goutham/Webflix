import React, { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton
          inline
          className='mb-4 w-[260px] h-[160px] md:h-[230px] rounded-lg  md:w-[420px]'
        />
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
