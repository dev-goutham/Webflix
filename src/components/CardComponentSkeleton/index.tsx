import React, { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CardComponentSkeleton: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton className='h-[230px] rounded-lg  w-[210px] md:w-[290px] md:h-[250px]' />
        <Skeleton width={160} height={24} />
        <Skeleton width={160} height={24} />
      </SkeletonTheme>
    </div>
  );
};

export default CardComponentSkeleton;
