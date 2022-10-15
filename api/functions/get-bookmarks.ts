import { HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/faunadb';

const {
  client,
  query: { Select, Get, Match, Create, Collection, Index },
} = connectToDb();

export const handler = verifyJwt(async (event: HandlerEvent, context) => {
  const {
    claims: { sub },
  } = context.identityContext;
  const id = sub.split('|')[1];

  try {
    await client.query(Get(Match(Index('get_user_by_id'), id)));
  } catch (error) {
    if (error.message === 'instance not found') {
      await client.query(
        Create(Collection('users'), {
          data: {
            id,
            bookmarks: {
              movies: [],
              tv: [],
            },
          },
        }),
      );
    }
  }

  try {
    const res = await client.query(
      Select(['data', 'bookmarks'], Get(Match(Index('get_user_by_id'), id))),
    );
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (error) {
    if (error.message === 'instance not found') {
      return {
        statusCode: 200,
        body: JSON.stringify({
          movies: [],
          tv: [],
        }),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify(error),
      };
    }
  }
});
