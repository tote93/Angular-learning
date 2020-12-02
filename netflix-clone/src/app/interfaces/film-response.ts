export interface FilmResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  id: number;
  poster_path: string;
  vote_average: number;
  overview: string;
  original_language: string;
  backdrop_path: string;
  first_air_date?: string;
  vote_count: number;
  popularity: number;
  video?: boolean;
  adult?: boolean;
  original_title?: string;
  original_name?: string;
  genre_ids?: number[] | null;
  title?: string;
  release_date: string;
}
