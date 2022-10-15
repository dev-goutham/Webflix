import { HandlerEvent } from '@netlify/functions';
import verifyJwt from '../lib/verify-jwt';
import connectToDb from '../lib/faunadb';

const {
  client,
  query: { Select, Get, Match, Index },
} = connectToDb();

export const handler = verifyJwt(async (event: HandlerEvent, context) => {
  const {
    claims: { sub },
  } = context.identityContext;
  const id = sub.split('|')[1];

  try {
    // const res = await client.query(
    //   Let(
    //     {
    //       ref: Select('ref', Get(Match(Index('get_user_by_id'), id))),
    //       array: Select(
    //         ['data', 'bookmarks'],
    //         Get(Match(Index('get_user_by_id'), id)),
    //       ),
    //     },
    //     Update(Var('ref'), {
    //       data: {
    //         bookmarks: Append([2], Var('array')),
    //       },
    //     }),
    //   ),
    // );
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
