import CardComponent from '@/components/CardComponent';
import Pagination from '@/components/Pagination';
import useApiQuery from '@/hooks/useApiQuery';
import useScrollToTop from '@/hooks/useScrollToTop';
import React, { PropsWithChildren } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import { ITv } from 'typings/Tv';

interface Props extends PropsWithChildren {
  type: 'movie' | 'tv';
}

const QueryPageSection: React.FC<Props> = ({ type }) => {
  useScrollToTop();
  const query = useParams<{ query: string }>().query as string;
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data } = useApiQuery<QueryResult<ITv | IMovie>>({
    path: `${type}/${query}`,
    tags: [type + 's', query, page],
    query: `page=${page}`,
    options: {
      enabled: !!query,
    },
  });
  return (
    <div>
      {data && (
        <>
          <div className='grid grid-cols-2 lg:grid-cols-4  gap-6 mx-auto'>
            {data.results.map((item) => (
              <CardComponent item={item} key={item.id} />
            ))}
          </div>
          <div className='flex justify-center my-12'>
            <Pagination currentPage={+page} numberOfPages={data?.total_pages} />
          </div>
        </>
      )}
    </div>
  );
};

export default QueryPageSection;
