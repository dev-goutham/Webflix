import useBookmarks from '@/hooks/useBookmarks';
import DisplaySection from '@/sections/DisplaySection';
import HeroSection from '@/sections/HeroSection';
import React, { PropsWithChildren } from 'react';

const Home: React.FC<PropsWithChildren> = () => {
  useBookmarks();
  return (
    <div>
      <HeroSection />
      <DisplaySection heading='popular' type='movie' path='movie/popular' />
      <DisplaySection heading='popular' type='tv' path='tv/popular' />
      <DisplaySection heading='top rated' type='movie' path='movie/top_rated' />
      <DisplaySection heading='top rated' type='tv' path='tv/top_rated' />
    </div>
  );
};

export default Home;
