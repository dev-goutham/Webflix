import React, { PropsWithChildren } from 'react';
import AuthButtons from './AuthButtons';
import Navbar from './Navbar';
import SearchBar from './Searchbar';

const Header: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <Navbar />
      <div className='flex py-4  px-6 bg-stone-200 dark:bg-stone-700'>
        <SearchBar />
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
