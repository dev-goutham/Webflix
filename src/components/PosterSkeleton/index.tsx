import React, { PropsWithChildren } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type Props = PropsWithChildren;

const PosterSkeleton: React.FC<Props> = () => {
  return (
    <div className='min-w-[360px]'>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton className='rounded-md' width={353} height={530} inline />
      </SkeletonTheme>
    </div>
  );
};

export default PosterSkeleton;
