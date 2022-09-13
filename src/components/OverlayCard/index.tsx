import React from 'react';
import { TbMovie } from 'react-icons/tb';
import { Link } from 'react-router-dom';

interface Props {
  id: string | number;
  imageUrl: string;
  title: string;
  type: 'movie' | 'tv' | 'person';
  year: string;
}

const OverlayCard: React.FC<Props> = ({ id, imageUrl, title, type, year }) => {
  return (
    <Link to={`/${type}/${id}`}>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)), url(${imageUrl})`,
        }}
        className='h-[230px] rounded-lg flex p-6 items-end w-[420px] relative bg-no-repeat bg-cover'
      >
        <div>
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
        </div>
      </div>
    </Link>
  );
};

export default OverlayCard;
