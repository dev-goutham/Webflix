import React, { PropsWithChildren } from 'react';
import Header from './Header';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='dark:text-stone-100 text-stone-800'>
      <Header />
      <div className='dark:bg-stone-600 bg-stone-100'>
        <main className='md:ml-[120px] px-6 py-4 min-h-screen'>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
