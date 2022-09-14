import React, { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkeleton: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton
          inline
          className='mb-4 w-full bg-cover rounded-md bg-center h-[400px] flex items-end md:h-[540px] p-12'
        />
      </SkeletonTheme>
    </div>
  );
};

export default HeroSkeleton;
