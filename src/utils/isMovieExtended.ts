import { IMovieExtended } from 'typings/IMovieExtended';
import { IPerson } from 'typings/IPerson';
import { ITvExtended } from 'typings/ITExtended';

function isMovieExtended(
  obj: IMovieExtended | ITvExtended | IPerson,
): obj is IMovieExtended {
  return 'title' in obj;
}

export default isMovieExtended;
