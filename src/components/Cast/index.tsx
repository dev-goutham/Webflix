import useApiQuery from '@/hooks/useApiQuery';
import useIsImageLoaded from '@/hooks/useIsImageLoaded';
import React, { useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';
import { ICast } from 'typings/Cast';
import CastSkeleton from '../CastSkeleton';
import Slider from '../Slider';

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
    <div>
      <h4 className='text-gray-600 text-xl mb-2'>Top Cast</h4>
      <Slider>
        {data &&
          data.cast.map((actor) => (
            <CastComponent actor={actor} key={actor.id} />
          ))}
        {isLoading && <CastSkeleton />}
      </Slider>
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
    <Link to={`/actor/${actor.id}`} className='w-[102px] mb-4 font-thin'>
      {isLoaded ? (
        <img className='min-w-[102px] rounded-md' src={imageUrl} />
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
