import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from 'typings/Movie';
import { QueryResult } from 'typings/QueryResult';
import { ITv } from 'typings/Tv';

const tmdbSlice = createApi({
  reducerPath: 'tmdb',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    getPopularMovies: builder.query<QueryResult<IMovie>, number | void>({
      query: (page = 1) =>
        `/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getPopularTv: builder.query<QueryResult<ITv>, number | void>({
      query: (page = 1) =>
        `/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getTopRatedMovies: builder.query<QueryResult<IMovie>, number | void>({
      query: (page = 1) =>
        `/movie/top_rated?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getTopRatedTv: builder.query<QueryResult<ITv>, number | void>({
      query: (page = 1) =>
        `/tv/top_rated?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getUpcomingMovies: builder.query<QueryResult<IMovie>, number | void>({
      query: (page = 1) =>
        `/movie/upcoming?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getOnAirToday: builder.query<QueryResult<ITv>, number | void>({
      query: (page = 1) =>
        `/tv/airing_today?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getNowPlayingMovies: builder.query<QueryResult<IMovie>, number | void>({
      query: (page = 1) =>
        `/movie/now_playing?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}&language=en-US`,
    }),
    getTrendingMovies: builder.query<QueryResult<IMovie>, number | void>({
      query: (page = 1) =>
        `/trending/movie/day?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}`,
    }),
    getTrendingTv: builder.query<QueryResult<ITv>, number | void>({
      query: (page = 1) =>
        `/trending/tv/day?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=${page}`,
    }),
    getGenres: builder.query<{ id: number; name: string }[], 'tv' | 'movie'>({
      query: (medium) =>
        `/genre/${medium}/list?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`,
    }),
  }),
});

export default tmdbSlice;
