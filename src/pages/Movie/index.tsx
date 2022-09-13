import DetailsSection from '@/sections/DetailsSection';
import useScrollToTop from '@/hooks/useScrollToTop';
import React, { PropsWithChildren } from 'react';
import { useParams } from 'react-router-dom';

const Movie: React.FC<PropsWithChildren> = () => {
  const { id } = useParams<{ id: string }>() as { id: string };

  useScrollToTop();
  return (
    <div>
      <DetailsSection id={id} type='movie' />
    </div>
  );
};

export default Movie;
