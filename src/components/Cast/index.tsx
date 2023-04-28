import useApiQuery from '@/hooks/useApiQuery';
import useIsImageLoaded from '@/hooks/useIsImageLoaded';
import React, { useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { ICast } from 'typings/Cast';
import CastSkeleton from '../CastSkeleton';
import Carousel from 'react-multi-carousel';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 3,
  },
};

const Cast: React.FC<{ id: number; type: 'movie' | 'tv' }> = ({ id, type }) => {
  const { isLoading, data } = useApiQuery<{
    id: number;
    cast: ICast[];
  }>({
    path: `${type}/${id}/credits`,
    tags: [type, `${id}`, 'cast'],
    options: {
      select: (data) => {
        const cast = data.cast.filter(
          (person) => person.known_for_department === 'Acting',
        );
        return {
          id: data.id,
          cast,
        };
      },
    },
  });

  return (
    <div className='max-w-[442px] md:max-w-[600px] lg:max-w-[700px]'>
      {isLoading || !data ? (
        <Carousel responsive={responsive}>
          {new Array(6).fill(null).map((_, i) => (
            <SkeletonTheme key={i} baseColor='#c6c6c6' highlightColor='#ffffff'>
              <Skeleton width={102} height={153} />
            </SkeletonTheme>
          ))}
        </Carousel>
      ) : (
        <Carousel
          itemClass='cast-item'
          containerClass='space-x-6 cast-item-container'
          responsive={responsive}
        >
          {data.cast.map((actor) => (
            <CastComponent actor={actor} key={actor.id} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

const CastComponent: React.FC<{
  actor: ICast;
}> = ({ actor }) => {
  const imageUrl = useMemo(
    () => `http://image.tmdb.org/t/p/w500${actor.profile_path}`,
    [actor.profile_path],
  );
  const isLoaded = useIsImageLoaded(imageUrl);

  return (
    <Link
      to={`/actor/${actor.id}`}
      className='w-[102px] inline-block  mb-4 font-thin'
    >
      {isLoaded ? (
        <img className='w-[102px]  rounded-md' src={imageUrl} />
      ) : (
        <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
          <Skeleton className='w-[102px] h-[153px] rounded-md' />
        </SkeletonTheme>
      )}
      <p>{actor.name}</p>
      <p className='text-gray-500'>{actor.character}</p>
    </Link>
  );
};

export default Cast;
