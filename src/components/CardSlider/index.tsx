import isMovie from '@/utils/isMovie';
import React from 'react';
import { IMovie } from 'typings/Movie';
import { ITv } from 'typings/Tv';
import OverlayCard from '../OverlayCard';
import Slider from '../Slider';

type Props = {
  items: IMovie[] | ITv[];
};

const CardSlider: React.FC<Props> = ({ items }) => {
  return (
    <Slider>
      {items.map((item) => (
        <div className='mb-4 snap-center' key={item.id}>
          <OverlayCard
            id={item.id}
            imageUrl={'http://image.tmdb.org/t/p/w500' + item.backdrop_path}
            title={isMovie(item) ? item.title : item.name}
            type={isMovie(item) ? 'movie' : 'tv'}
            year={isMovie(item) ? item.release_date : item.first_air_date}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
