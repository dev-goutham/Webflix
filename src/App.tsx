import React, { PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/_404';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
