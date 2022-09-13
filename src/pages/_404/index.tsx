import useScrollToTop from '@/hooks/useScrollToTop';
import React, { PropsWithChildren } from 'react';

const NotFound: React.FC<PropsWithChildren> = () => {
  useScrollToTop();
  return <div>Not Found</div>;
};

export default NotFound;
