import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';

interface Props extends PropsWithChildren {
  movie: IMovie;
}

const HeroImage: React.FC<Props> = ({ movie }) => {
  return (
    <div className='animate-fade'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
        className='w-full relative bg-cover rounded-md bg-center h-[400px] flex items-end md:h-[540px] p-14'
      >
        <Link to={`/movie/${movie.id}`} className='lg:w-1/3'>
          <div className='font-bold text-xl mb-2'>{movie.title}</div>
          <div className='font-light text-gray-300'>{movie.overview}</div>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
