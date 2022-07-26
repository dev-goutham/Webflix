import React, { PropsWithChildren } from 'react';
import Header from './Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='dark:text-vulcan-100 font-ligt text-stone-800'>
      <Header />
      <div className='dark:bg-vulcan-600 bg-stone-100'>
        <main className='md:ml-[120px] px-6 py-4 min-h-screen'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
