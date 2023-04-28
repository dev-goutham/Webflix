import React, { PropsWithChildren } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

const responsive: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1920 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const Slider: React.FC<PropsWithChildren> = ({ children }) => {
  return <Carousel responsive={responsive}>{children}</Carousel>;
};

export default Slider;
