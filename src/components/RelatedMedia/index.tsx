import useApiQuery from '@/hooks/useApiQuery';
import React from 'react';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import { ITv } from 'typings/Tv';
import CardComponent from '../CardComponent';
import CardComponentSkeleton from '../CardComponentSkeleton';

const RelatedMedia: React.FC<{ type: 'movie' | 'tv'; id: number }> = ({
  id,
  type,
}) => {
  const { isLoading, data } = useApiQuery<QueryResult<IMovie | ITv>>({
    path: `${type}/${id}/similar`,
    tags: [type, `${id}`, 'related'],
  });

  return (
    <div>
      {data && (
        <>
          <h4 className='text-xl text-gray-600'>You Might also like</h4>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9'>
            {data.results.map((item) => (
              <CardComponent key={item.id} item={item} />
            ))}
            {isLoading &&
              new Array(10)
                .fill(null)
                .map((_, i) => <CardComponentSkeleton key={i} />)}
          </div>
        </>
      )}
    </div>
  );
};

export default RelatedMedia;
