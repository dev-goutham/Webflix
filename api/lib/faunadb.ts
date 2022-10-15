import { Client, query } from 'faunadb';

const connectToDb = () => {
  const client = new Client({
    secret: process.env.FAUNA_DB_KEY!,
  });

  return { client, query };
};

export default connectToDb;
