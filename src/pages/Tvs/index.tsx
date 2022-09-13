import GenresSection from '@/sections/GenresSection';
import useScrollToTop from '@/hooks/useScrollToTop';
import React, { PropsWithChildren } from 'react';

const TvPage: React.FC<PropsWithChildren> = () => {
  useScrollToTop();
  return <GenresSection type='tv' />;
};

export default TvPage;
