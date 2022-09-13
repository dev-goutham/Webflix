import useApiQuery from '@/hooks/useApiQuery';
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import { ITv } from 'typings/Tv';
import CardSlider from '@/components/CardSlider';
import SkeletonGrid from '@/components/SkeletonGrid';

interface Props {
  heading: string;
  path: string;
  type: 'movie' | 'tv';
}

const DisplaySection: React.FC<Props> = ({ heading, type, path }) => {
  const { data, isLoading } = useApiQuery<
    QueryResult<ITv> | QueryResult<IMovie>
  >({
    path,
    tags: [type + 's', heading, `1`],
    query: 'page=1',
  });

  const link = useMemo(() => {
    const linkType = type === 'movie' ? 'movies' : 'television';
    const linkQuery = heading === 'top rated' ? 'top_rated' : heading;
    return '/' + linkType + '/' + linkQuery + '?page=1';
  }, [heading, type]);

  return (
    <section className='my-4'>
      <div className='flex justify-between items-baseline py-4'>
        <div className='flex items-baseline gap-4'>
          <h3 className='text-2xl capitalize'>{heading}</h3>
          <div className='px-2 py-1 text-[9px] uppercase leading-none border-2 rounded-md border-gray-200'>
            {type}
          </div>
        </div>
        <Link className='mr-4 text-slate-500 hover:text-blue-700' to={link}>
          See more
        </Link>
      </div>
      <div>{data && <CardSlider items={data.results} />}</div>
      <div>{isLoading && <SkeletonGrid />}</div>
    </section>
  );
};

export default DisplaySection;
