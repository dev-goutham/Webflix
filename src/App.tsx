import React, { PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/_404';
import Layout from '@/components/Layout';
import Home from './pages/Home';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
