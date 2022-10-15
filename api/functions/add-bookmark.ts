import { HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/faunadb';

const {
  client,
  query: { Let, Select, Update, Var, Append, Get, Match, Index },
} = connectToDb();

export const handler = verifyJwt(async (event: HandlerEvent, context) => {
  const {
    claims: { sub },
  } = context.identityContext;
  const id = sub.split('|')[1];
  const body = JSON.parse(event.body as string) as {
    id: number;
    type: 'movies' | 'tv';
  };
  console.log({ body, id });

  if (!body?.id || !body?.type) {
    return {
      statusCode: 400,
    };
  } else if (body.type !== 'movies' && body.type !== 'tv') {
    return {
      statusCode: 400,
    };
  }

  let query = {};

  if (body.type === 'movies') {
    query = {
      movies: Append([body.id], Var('array')),
    };
  } else {
    query = {
      tv: Append([body.id], Var('array')),
    };
  }

  try {
    const res = await client.query(
      Let(
        {
          ref: Select('ref', Get(Match(Index('get_user_by_id'), id))),
          array: Select(
            ['data', 'bookmarks', body.type],
            Get(Match(Index('get_user_by_id'), id)),
          ),
        },
        Update(Var('ref'), {
          data: {
            bookmarks: query,
          },
        }),
      ),
    );
    // const res = await client.query(
    //   Select(['data', 'bookmarks'], Get(Match(Index('get_user_by_id'), id))),
    // );
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    if (error.message === 'instance not found') {
      return {
        statusCode: 200,
        body: JSON.stringify([]),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify(error),
      };
    }
  }
});
