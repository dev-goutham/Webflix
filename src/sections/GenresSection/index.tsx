import useApiQuery from '@/hooks/useApiQuery';
import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface Props extends PropsWithChildren {
  type: 'tv' | 'movie';
}

const GenresSection: React.FC<Props> = ({ type }) => {
  const { data } = useApiQuery<{
    genres: {
      id: number;
      name: string;
    }[];
  }>({
    path: `genre/${type}/list`,
    tags: ['genres', type],
  });

  const getLink = (id: number) =>
    type === 'movie'
      ? `/movies/genre/${id}?page=1`
      : `/television/genre/${id}?page=1`;

  return (
    <div className='flex px-12 justify-between flex-wrap gap-4'>
      {data &&
        data.genres.map((genre, idx) => (
          <Link
            to={getLink(genre.id)}
            className={`h-[200px] w-[200px] rounded-md flex items-center justify-center grow ${
              idx % 2 === 0 ? 'bg-teal-800' : 'bg-gray-800'
            }`}
            key={genre.id}
          >
            {genre.name}
          </Link>
        ))}
    </div>
  );
};

export default GenresSection;
