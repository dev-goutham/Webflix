import CardComponent from '@/components/CardComponent';
import CardComponentSkeleton from '@/components/CardComponentSkeleton';
import useApiQuery from '@/hooks/useApiQuery';
import React from 'react';
import { useParams } from 'react-router-dom';
import { IPerson } from 'typings/IPerson';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import { ITv } from 'typings/Tv';

function isPerson(obj: IMovie | ITv | IPerson): obj is IPerson {
  return 'profile_path' in obj;
}

const SearchResults: React.FC = () => {
  const { query } = useParams() as { query: string };

  const { isLoading, data } = useApiQuery<QueryResult<IMovie | ITv>>({
    path: 'search/multi',
    tags: ['Search', query],
    query: `query=${query}`,
    options: {
      select: (data) => {
        const filteredData = data.results.filter(
          (item) => !isPerson(item) && (item.poster_path || item.backdrop_path),
        );
        return {
          page: data.page,
          total_pages: data.total_pages,
          total_results: data.total_results,
          results: filteredData,
        };
      },
    },
  });

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
      {data && data.results.length === 0 && (
        <p className='text-xl'>
          No results found for
          <span className='font-bold ml-1'>{query}</span>
        </p>
      )}
      {data &&
        data.results.map((item) => (
          <div key={item.id}>
            <CardComponent item={item} />
          </div>
        ))}
      {isLoading && (
        <>
          {new Array(4).fill(null).map((_, i) => (
            <CardComponentSkeleton key={i} />
          ))}
        </>
      )}
    </div>
  );
};

export default SearchResults;
