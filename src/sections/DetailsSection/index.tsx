import React, { PropsWithChildren } from 'react';
import { IMovieExtended } from 'typings/IMovieExtended';
import { ITvExtended } from 'typings/ITExtended';
import useApiQuery from '@/hooks/useApiQuery';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import isMovieExtended from '@/utils/isMovieExtended';
import Poster from '@/components/Poster';
import PosterSkeleton from '@/components/PosterSkeleton';
import Cast from '@/components/Cast';
import Details from '@/components/Details';
import RelatedMedia from '@/components/RelatedMedia';

interface Props extends PropsWithChildren {
  type: 'movie' | 'tv' | 'person';
  id: string;
}

const DetailsSkeleton: React.FC = () => {
  return (
    <div className='md:ml-16 mt-4 md:mt-0 max-w-5/6 lg:w-[760px]  space-y-6'>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton height={40} />
        <Skeleton height={28} />
        <Skeleton height={36} />
        <Skeleton height={60} />
        <Skeleton height={200} />
      </SkeletonTheme>
    </div>
  );
};

const DetailsSection: React.FC<Props> = ({ id, type }) => {
  const { data: item, isLoading } = useApiQuery<IMovieExtended | ITvExtended>({
    path: `${type}/${id}`,
    tags: [type, id],
  });

  return (
    <div>
      <div>
        <div className='flex p-12 lg:flex-row flex-col items-center lg:items-start'>
          {item && !isLoading ? (
            <Poster
              imageUrl={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
              title={isMovieExtended(item) ? item.title : item.name}
            />
          ) : (
            <PosterSkeleton />
          )}
          <div>
            {item && !isLoading ? <Details item={item} /> : <DetailsSkeleton />}
            <div className='md:ml-16 mt-8  max-w-[360px] md:max-w-[500px] lg:max-w-[850px]'>
              {item && !isLoading && (
                <Cast
                  id={item.id}
                  type={isMovieExtended(item) ? 'movie' : 'tv'}
                />
              )}
            </div>
          </div>
        </div>
        {item && (
          <>
            <RelatedMedia
              type={isMovieExtended(item) ? 'movie' : 'tv'}
              id={item.id}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DetailsSection;
