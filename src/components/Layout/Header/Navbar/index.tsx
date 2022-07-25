import React, { PropsWithChildren } from 'react';

import ToggleThemeBtn from './ToggleThemeBtn';
import NavItems from './NavItems';
import Logo from './Logo';

const Navbar: React.FC<PropsWithChildren> = () => {
  return (
    <nav className='relative shadow-2xl md:fixed flex md:flex-col items-center justify-between dark:bg-stone-800 bg-stone-300 h-[70px] md:h-screen px-6 py-2 md:py-4 md:px-2'>
      <Logo />
      <NavItems />
      <ToggleThemeBtn />
    </nav>
  );
};

export default Navbar;
