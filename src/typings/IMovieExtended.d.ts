import { CountryCode } from './CountryCodes.enum';
import { IMovie } from './Movie';

export interface IMovieExtended extends IMovie {
  genres: {
    id: number;
    name: string;
  }[];
  budget: number;
  homepage: string;
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
}
