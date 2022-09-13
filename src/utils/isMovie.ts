import { IPerson } from 'typings/IPerson';
import { IMovie } from 'typings/Movie';
import { ITv } from 'typings/Tv';

function isMovie(item: IMovie | ITv | IPerson): item is IMovie {
  return 'title' in item;
}

export default isMovie;
