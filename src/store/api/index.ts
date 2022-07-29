import tmdbSlice from './tmdb';

export default tmdbSlice;

export const {
  useGetNowPlayingMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetPopularMoviesQuery,
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,

  useGetTopRatedTvQuery,
  useGetPopularTvQuery,
  useGetTrendingTvQuery,

  useGetGenresQuery,
} = tmdbSlice;
