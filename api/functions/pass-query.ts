import { HandlerContext, HandlerEvent } from '@netlify/functions';
import axios from 'axios';
import queryString from 'query-string';

export const handler = async (event: HandlerEvent, context: HandlerContext) => {
  const { path, ...rest } = queryString.parse(event.rawQuery) as {
    path: string;
  } & unknown;

  let query = '';

  Object.keys(rest).forEach((key) => {
    query += `&${key}=${rest[key]}`;
  });

  const url = `https://api.themoviedb.org/3/${path}?api_key=${process.env.VITE_TMDB_API_KEY}${query}`;
  const res = (await axios.get(url)).data;
  console.log('res');

  return {
    statusCode: 200,
    body: JSON.stringify(res),
  };
};
