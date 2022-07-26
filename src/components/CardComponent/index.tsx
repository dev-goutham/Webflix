import isMovie from '@/utils/isMovie';
import React, { PropsWithChildren, useMemo } from 'react';
import { TbMovie } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { ITv } from 'typings/Tv';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useIsImageLoaded from '@/hooks/useIsImageLoaded';
import BookmarkComponent from '../BookmarkComponent';

type Props = PropsWithChildren & {
  item: IMovie | ITv;
};

const CardComponent: React.FC<Props> = ({ item }) => {
  const imageUrl = useMemo(
    () =>
      `http://image.tmdb.org/t/p/original${
        item.poster_path || item.backdrop_path
      }`,
    [item.backdrop_path, item.poster_path],
  );
  const isLoaded = useIsImageLoaded(imageUrl);

  return (
    <div className='rounded-md relative w-[180px] md:w-[210px]  lg:w-[290px] '>
      {isLoaded ? (
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className='h-[200px] rounded-lg flex items-end w-[180px] md:w-[210px] md:h-[230px] lg:w-[290px] lg-h-[250px] relative bg-no-repeat bg-cover animate-fade'
        >
          <div className='absolute top-4 right-4'>
            <BookmarkComponent
              id={item.id}
              type={isMovie(item) ? 'movies' : 'tv'}
            />
          </div>
        </div>
      ) : (
        <div>
          <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
            <Skeleton
              className='h-[200px] rounded-lg flex items-end w-[180px] md:w-[210px] md:h-[230px] lg:w-[290px] lg-h-[250px] relative bg-no-repeat bg-cover animate-fade'
              inline
            />
          </SkeletonTheme>
        </div>
      )}
      <div className='flex gap-4 text-slate-700'>
        <div>
          {new Date(
            isMovie(item) ? item.release_date : item.first_air_date,
          ).getFullYear()}
        </div>
        <div className='flex gap-1 items-center'>
          {isMovie(item) ? (
            <>
              <span>
                <TbMovie />
              </span>
              <span>Movie</span>
            </>
          ) : (
            <>
              <span>
                <svg
                  className='icon-nav'
                  fill='currentColor'
                  width='1em'
                  height='1em'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z'></path>
                </svg>
              </span>
              <span>Tv</span>
            </>
          )}
        </div>
      </div>
      <Link to={`/${isMovie(item) ? 'movie' : 'tv'}/${item.id}`}>
        <p className='text-xl'>{isMovie(item) ? item.title : item.name}</p>
      </Link>
    </div>
  );
};

export default CardComponent;
