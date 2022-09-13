import React, { PropsWithChildren } from 'react';
import CardSkeleton from '../CardSkeleton';

const SkeletonGrid: React.FC<PropsWithChildren> = () => {
  return (
    <div className='h-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-500 scroll-smooth snap-y scrollbar-track-slate-300 relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2'>
      {new Array(20).fill(null).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
