import useApiQuery from '@/hooks/useApiQuery';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import HeroImage from '@/components/HeroImage';
import HeroSkeleton from '@/components/HeroSkeleton';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

const HeroSection: React.FC<PropsWithChildren> = () => {
  const { data, isLoading } = useApiQuery<QueryResult<IMovie>>({
    path: 'movie/now_playing',
    tags: ['movies', 'now_playing', '1'],
  });

  return (
    <div>
      <div className='flex justify-between items-baseline mb-4'>
        <div className='flex items-baseline gap-4'>
          <h3 className='text-2xl capitalize'>Now Playing</h3>
          <div className='px-2 py-1 text-[9px] uppercase leading-none border-2 rounded-md border-gray-200'>
            movie
          </div>
        </div>
        <Link
          className='mr-4 text-slate-500 hover:text-blue-700'
          to={`/movies/now_playing?page=1`}
        >
          See more
        </Link>
      </div>
      {data && (
        <div>
          <HeroCarousel movies={data.results} />
        </div>
      )}
      {isLoading && <HeroSkeleton />}
    </div>
  );
};

const responsive: ResponsiveType = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const HeroCarousel: React.FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Carousel infinite ssr={true} responsive={responsive}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <HeroImage movie={movie} />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroSection;
