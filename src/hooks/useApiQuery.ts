import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

const useApiQuery = <T>({
  tags,
  path,
  options,
  query,
}: {
  tags: string[];
  path: string;
  options?: UseQueryOptions<T, Error>;
  query?: string;
}) => {
  const result = useQuery<T, Error>(
    tags,
    // async () => {
    //   const result = (
    //     await axios.get(
    //       `https://api.themoviedb.org/3/${path}?api_key=${
    //         import.meta.env.VITE_TMDB_API_KEY
    //       }&${query}`,
    //     )
    //   ).data;
    //   return result;
    // },
    async () => {
      const result = (await axios.get(`/pass-query?path=${path}&${query}`))
        .data;
      return result;
    },
    {
      ...options,
      staleTime: Infinity,
    },
  );

  return result;
};

export default useApiQuery;
