import React from 'react';
import isMovieExtended from '@/utils/isMovieExtended';
import { IMovieExtended } from 'typings/IMovieExtended';
import { ITvExtended } from 'typings/ITExtended';
import Rating from './Rating';
import BookmarkComponent from '../BookmarkComponent';

const Details: React.FC<{ item: IMovieExtended | ITvExtended }> = ({
  item,
}) => {
  const isMovie = isMovieExtended(item);

  const tagLine = item.tagline;
  const language = item.spoken_languages[0]?.english_name || 'English';
  const status = item.status;
  const genres = item.genres;
  const overview = item.overview;

  let title: string;
  let length: number | undefined;
  let releaseDate: string;
  if (isMovie) {
    title = item.title;
    length = item.runtime;
    releaseDate = item.release_date;
  } else {
    title = item.name;
    releaseDate = new Date(item.first_air_date).getFullYear().toString();
    length = item.episode_run_time[0];
  }

  return (
    <div className='md:ml-16 mt-4 md:mt-0 w-3/4 space-y-6'>
      <div className='flex  items-center justify-between'>
        <h2 className='text-4xl  md:text-left'>{title}</h2>
        <BookmarkComponent id={item.id} type={isMovie ? 'movies' : 'tv'} />
      </div>
      <h4 className='text-xl font-thin text-gray-400'>{tagLine}</h4>
      <div className='flex justify-center md:justify-start'>
        <Rating rating={+(item.vote_average / 2).toFixed(1)} />
      </div>
      <div className='text-xl grid md:grid-cols-4 grid-cols-2 gap-6'>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-500'>Length</span>
          <span>{length} mins</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-500'>Language</span>
          <span>{language}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-500'>Release Date</span>
          <span>{releaseDate}</span>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-gray-500'>Status</span>
          <span>{status}</span>
        </div>
      </div>
      <div className='flex gap-8'>
        {genres.map((genre) => (
          <div
            className='px-2 dark:bg-slate-700 font-thin bg-slate-300 rounded-md border-2 dark:border-slate-400 border-slate-600'
            key={genre.id}
          >
            {genre.name}
          </div>
        ))}
      </div>
      <div>
        <h4 className='text-xl text-gray-600 dark:text-gray-500'>Synopsis</h4>
        <p className='font-light tracking-wide'>{overview}</p>
      </div>
    </div>
  );
};

export default Details;
