import React, { PropsWithChildren } from 'react';
import AuthButtons from './AuthButtons';
import Navbar from './Navbar';
import SearchBar from './Searchbar';

const Header: React.FC<PropsWithChildren> = () => {
  return (
    <div>
      <Navbar />
      <div className='flex items-center gap-5 flex-col md:flex-row py-4 shadow-md  px-6 bg-stone-200 dark:bg-vulcan-700'>
        <SearchBar />
        <AuthButtons />
      </div>
    </div>
  );
};

export default Header;
