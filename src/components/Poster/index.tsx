import useIsImageLoaded from '@/hooks/useIsImageLoaded';
import React from 'react';
import PosterSkeleton from '../PosterSkeleton';

const Poster: React.FC<{ imageUrl: string; title: string }> = ({
  imageUrl,
  title,
}) => {
  const isLoaded = useIsImageLoaded(imageUrl);
  return (
    <div className='min-w-[360px]'>
      {isLoaded ? (
        <img className='h-[530px] rounded-md' src={imageUrl} alt={title} />
      ) : (
        <PosterSkeleton />
      )}
    </div>
  );
};

export default Poster;
