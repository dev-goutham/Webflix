import React from 'react';
import { TbMovie } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import BookmarkComponent from '../BookmarkComponent';

interface Props {
  id: string | number;
  imageUrl: string;
  title: string;
  type: 'movie' | 'tv' | 'person';
  year: string;
}

const OverlayCard: React.FC<Props> = ({ id, imageUrl, title, type, year }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
      }}
      className='h-[200px] md:h-[280px] rounded-lg flex p-6 items-end relative bg-no-repeat bg-cover'
    >
      <div className='absolute top-4 right-4'>
        <BookmarkComponent
          id={id as number}
          type={type === 'movie' ? 'movies' : 'tv'}
        />
      </div>
      <div>
        <Link to={`/${type}/${id}`}>
          <div className='flex gap-2'>
            <span>{year.split('-')[0]} &#183; </span>
            <span className='flex items-center gap-1'>
              <span>
                <TbMovie />
              </span>
              {type}
            </span>
          </div>
          <div className='text-xl font-bold tracking-wide'>{title}</div>
        </Link>
      </div>
    </div>
  );
};

export default OverlayCard;
