import { HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/faunadb';

// Filter(
//   [1, 2, 3],
//   Lambda(
//     "i",
//     Not(Equals(0, Modulo(Var("i"), 2))),
//   ),
// )
// filteredArr: Filter(Var('array'), Lambda('i', Not(Equals(Var('i'), 760161))))

const {
  client,
  query: {
    Let,
    Select,
    Update,
    Filter,
    Lambda,
    Not,
    Equals,
    Var,
    Get,
    Match,
    Index,
  },
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
      movies: Var('filteredArr'),
    };
  } else {
    query = {
      tv: Var('filteredArr'),
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
          filteredArr: Filter(
            Var('array'),
            Lambda('i', Not(Equals(Var('i'), body.id))),
          ),
        },
        Update(Var('ref'), {
          data: {
            bookmarks: query,
          },
        }),
      ),
    );
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
