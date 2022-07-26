import GenresSection from '@/sections/GenresSection';
import useScrollToTop from '@/hooks/useScrollToTop';
import React, { PropsWithChildren } from 'react';

const MoviesPage: React.FC<PropsWithChildren> = () => {
  useScrollToTop();
  return <GenresSection type='movie' />;
};

export default MoviesPage;
