import React, { PropsWithChildren } from 'react';

const Slider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='h-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-slate-500 scroll-smooth snap-y scrollbar-track-slate-300 relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2'>
      {children}
    </div>
  );
};

export default Slider;
