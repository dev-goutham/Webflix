import React, { PropsWithChildren } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '@/pages/_404';
import Layout from '@/components/Layout';

const App: React.FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default App;
