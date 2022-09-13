import { ITv } from './Tv';

export interface ITvExtended extends ITv {
  adult: boolean;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: string;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  in_production: true;
  languages: string[];
  last_air_date: Date;
  last_episode_to_air: {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  next_episode_to_air: {
    air_date: Date;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  networks: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_language: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  productions_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  status: string;
  seasons: {
    air_date: Date;
    episode_count: number;
    id: number;
    name: string;
    overview: '';
    poster_path: string;
    season_number: number;
  };
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  tagline: string;
  type: string;
}
