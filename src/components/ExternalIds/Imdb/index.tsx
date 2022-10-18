import React, { PropsWithChildren } from 'react';
import { FaImdb } from 'react-icons/fa';

interface Props extends PropsWithChildren {
  imdbId: string;
}

const Imdb: React.FC<Props> = ({ imdbId }) => {
  return (
    <div>
      <a target='blank' href={`https://www.imdb.com/name/${imdbId}`}>
        <FaImdb size={48} className='text-yellow-400' />
      </a>
    </div>
  );
};

export default Imdb;
