import QueryPageSection from '@/sections/QueryPageSection';
import React, { PropsWithChildren } from 'react';

const MoviesQuery: React.FC<PropsWithChildren> = () => {
  return <QueryPageSection type='movie' />;
};

export default MoviesQuery;
