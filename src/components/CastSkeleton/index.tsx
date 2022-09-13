import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const CastSkeleton: React.FC = () => {
  return (
    <>
      {new Array(6).fill(null).map((_, i) => (
        <SkeletonTheme key={i} baseColor='#c6c6c6' highlightColor='#ffffff'>
          <Skeleton width={102} height={153} />
        </SkeletonTheme>
      ))}
    </>
  );
};

export default CastSkeleton;
