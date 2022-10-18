import React, { PropsWithChildren } from 'react';
import { FaImdb } from 'react-icons/fa';
import Poster from '@/components/Poster';
import useApiQuery from '@/hooks/useApiQuery';
import { useParams } from 'react-router-dom';
import { IPerson } from 'typings/IPerson';
import { IMovie } from 'typings/Movie';
import { ITv } from 'typings/Tv';
import CardComponent from '@/components/CardComponent';
import useScrollToTop from '@/hooks/useScrollToTop';
import Imdb from '@/components/ExternalIds/Imdb';

const Actor: React.FC<PropsWithChildren> = () => {
  useScrollToTop();
  const id = useParams<{ id: string }>().id as string;
  const { data } = useApiQuery<IPerson>({
    path: `person/${id}`,
    tags: ['actor', id],
    options: {
      enabled: !!id,
    },
  });
  return (
    <div>
      {data && (
        <>
          <div className='flex p-12 lg:flex-row flex-col items-center lg:items-start'>
            <Poster
              imageUrl={`http://image.tmdb.org/t/p/original/${data.profile_path}`}
              title={data.name}
            />
            <div className='md:ml-16 mt-4 md:mt-0 ,lg:w-2/4 space-y-6'>
              <h2 className='text-3xl font-bold'>{data.name}</h2>
              <div className='grid grid-cols-2 gap-4'>
                <p>
                  DOB: <span className='font-bold ml-1'>{data.birthday}</span>
                </p>

                <p>
                  DOD:{' '}
                  <span className='font-bold ml-1'>{data.deathday || '-'}</span>
                </p>
              </div>
              <p className='font-light tracking-wide leading-relaxed'>
                {data.biography}
              </p>
              <Imdb imdbId={data.imdb_id} />
            </div>
          </div>
          <StarredIn actorId={data.id} />
        </>
      )}
    </div>
  );
};

const StarredIn: React.FC<{ actorId: number }> = ({ actorId }) => {
  const { data } = useApiQuery<{
    cast: (IMovie | ITv)[];
  }>({
    path: `person/${actorId}/combined_credits`,
    tags: ['actor', 'credits', `${actorId}`],
    query: 'page=1',
  });
  return (
    <div>
      <h4 className='text-xl text-gray-600 mb-2'>Starred In</h4>
      <div className='grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data &&
          data.cast.map((item) => <CardComponent key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Actor;
