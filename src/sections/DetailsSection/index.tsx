import React, { PropsWithChildren, useEffect, useState } from 'react';
import { IMovieExtended } from 'typings/IMovieExtended';
import { ITvExtended } from 'typings/ITExtended';
import useApiQuery from '@/hooks/useApiQuery';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import isMovieExtended from '@/utils/isMovieExtended';
import Poster from '@/components/Poster';
import PosterSkeleton from '@/components/PosterSkeleton';
import Cast from '@/components/Cast';
import Details from '@/components/Details';
import RelatedMedia from '@/components/RelatedMedia';
import Imdb from '@/components/ExternalIds/Imdb';
import Facebook from '@/components/ExternalIds/Facebook';
import Instagram from '@/components/ExternalIds/Instagram';
import Twitter from '@/components/ExternalIds/Twitter';
import { BiMoviePlay } from 'react-icons/bi';
import Modal from 'react-modal';

interface Props extends PropsWithChildren {
  type: 'movie' | 'tv' | 'person';
  id: string;
}

const DetailsSkeleton: React.FC = () => {
  return (
    <div className='md:ml-16 mt-4 md:mt-0 max-w-5/6 lg:w-[760px]  space-y-6'>
      <SkeletonTheme baseColor='#c6c6c6' highlightColor='#ffffff'>
        <Skeleton height={40} />
        <Skeleton height={28} />
        <Skeleton height={36} />
        <Skeleton height={60} />
        <Skeleton height={200} />
      </SkeletonTheme>
    </div>
  );
};

Modal.setAppElement('#root');

const DetailsSection: React.FC<Props> = ({ id, type }) => {
  const { data: item, isLoading } = useApiQuery<IMovieExtended | ITvExtended>({
    path: `${type}/${id}`,
    tags: [type, id],
    query: 'append_to_response=videos,external_ids',
  });

  const [trailer, setTrailer] = useState<
    IMovieExtended['videos']['results'][0] | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!item) {
      return;
    }
    const t = item.videos.results.find((res) => res.type === 'Trailer');
    setTrailer(t);
  }, [item]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <div>
        <div className='flex p-12 lg:flex-row flex-col items-center lg:items-start'>
          {item && !isLoading ? (
            <div>
              <Poster
                imageUrl={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                title={isMovieExtended(item) ? item.title : item.name}
              />
              <div className='flex mt-2 justify-between'>
                <div className='flex gap-2'>
                  <Imdb imdbId={item.external_ids.imdb_id} />
                  {item.external_ids.facebook_id && (
                    <Facebook handle={item.external_ids.facebook_id} />
                  )}
                  {item.external_ids.instagram_id && (
                    <Instagram handle={item.external_ids.instagram_id} />
                  )}
                  {item.external_ids.twitter_id && (
                    <Twitter handle={item.external_ids.twitter_id} />
                  )}
                </div>
                {trailer && (
                  <button
                    onClick={openModal}
                    className='flex items-center rounded-lg gap-2 px-2 bg-[#d61a27]'
                  >
                    <span>
                      <BiMoviePlay size={24} />
                    </span>
                    <span>View trailer</span>
                  </button>
                )}
              </div>
            </div>
          ) : (
            <PosterSkeleton />
          )}
          <div>
            {item && !isLoading ? <Details item={item} /> : <DetailsSkeleton />}
            <div className='md:ml-16 mt-8  max-w-[360px] md:max-w-[500px] lg:max-w-[850px]'>
              {item && !isLoading && (
                <Cast
                  id={item.id}
                  type={isMovieExtended(item) ? 'movie' : 'tv'}
                />
              )}
            </div>
          </div>
        </div>
        {item && (
          <>
            <RelatedMedia
              type={isMovieExtended(item) ? 'movie' : 'tv'}
              id={item.id}
            />
          </>
        )}
      </div>
      <Modal
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
        style={{
          content: {
            zIndex: 99999,
            background: 'black',
            border: 'none',
          },
          overlay: {
            zIndex: 99999,
            background: 'rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        <iframe
          // autoPlay
          className='w-full h-full'
          frameBorder='0'
          title='Trailer'
          src={`https://www.youtube.com/embed/${trailer?.key}`}
          allow='autoplay'
        />
      </Modal>
    </div>
  );
};

export default DetailsSection;
