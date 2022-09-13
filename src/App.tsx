import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import NotFound from '@/pages/_404';
import Layout from '@/components/Layout';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Movie from './pages/Movie';
import Tv from './pages/Tv';
import MoviesPage from './pages/Movies';
import TvPage from './pages/Tvs';
import MoviesQuery from './pages/MoviesQuery';
import TvQuery from './pages/TvQuery';
import GenreListingSection from './sections/GenreListingsSection';
import Actor from './pages/Actor';

const queryClient = new QueryClient();

const App: React.FC<PropsWithChildren> = () => (
  <QueryClientProvider client={queryClient}>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:query' element={<MoviesQuery />} />
        <Route
          path='/movies/genre/:id'
          element={<GenreListingSection type='movie' />}
        />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/television' element={<TvPage />} />
        <Route path='/television/:query' element={<TvQuery />} />
        <Route
          path='/television/genre/:id'
          element={<GenreListingSection type='tv' />}
        />
        <Route path='/tv/:id' element={<Tv />} />
        <Route path='/actor/:id' element={<Actor />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
