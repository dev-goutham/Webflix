import React, { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CardSkeleton: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton className='rounded-md mb-4' width={420} height={230} />
      </SkeletonTheme>
    </div>
  );
};

export default CardSkeleton;
