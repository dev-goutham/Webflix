export interface IPerson {
  adult: boolean;
  gender: number;
  id: number;
  biography: string;
  known_for_department: string;
  imdb_id: string;
  place_of_birth: string;
  birthday: string;
  deathday: string | null;
  media_type: 'person';
  name: string;
  popularity: number;
  profile_path: string;
}
