import { CountryCode } from './CountryCodes.enum';
import { IMovie } from './Movie';

export interface IMovieExtended extends IMovie {
  genres: {
    id: number;
    name: string;
  }[];
  budget: number;
  homepage: string;
  imdb_id: string;
  original_title: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: CountryCode;
  }[];
  production_countries: {
    iso_3166_1: number;
    name: string;
  }[];
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | ' Post Production'
    | 'Released'
    | 'Canceled';

  tagline: string;
  videos: {
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: Date;
      id: string;
    }[];
  };
  external_ids: {
    imdb_id: string;
    freebase_mid: string;
    freebase_id: string;
    tvdb_id: number;
    tvrage_id: number;
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
  };
}
