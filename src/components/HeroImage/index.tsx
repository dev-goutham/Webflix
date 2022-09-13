import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

interface Props extends PropsWithChildren {
  movie: IMovie;
  onLeftButtonClick: () => void;
  onRightButtonClick: () => void;
}

const HeroImage: React.FC<Props> = ({
  movie,
  onLeftButtonClick,
  onRightButtonClick,
}) => {
  return (
    <div className='animate-fade'>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
        className='w-full relative bg-cover rounded-md bg-center h-[400px] flex items-end md:h-[540px] p-14'
      >
        <div className='absolute h-[28px] top-2/4 bottom-2/4 flex justify-between left-2 right-2'>
          <button onClick={onLeftButtonClick}>
            <AiFillLeftCircle
              className='shadow-lg text-gray-300'
              size={'32px'}
            />
          </button>
          <button onClick={onRightButtonClick}>
            <AiFillRightCircle
              className='shadow-lg text-gray-300'
              size={'32px'}
            />
          </button>
        </div>
        <Link to={`/movie/${movie.id}`} className='lg:w-1/3'>
          <div className='font-bold text-xl mb-2'>{movie.title}</div>
          <div className='font-light text-gray-300'>{movie.overview}</div>
        </Link>
      </div>
    </div>
  );
};

export default HeroImage;
