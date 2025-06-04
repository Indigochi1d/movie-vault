import { create } from "zustand";
import { Movie } from "@/lib/api/tmdb";

interface MovieState {
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
  searchResults: Movie[];
  setSearchResults: (movies: Movie[]) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  searchResults: [],
  setSearchResults: (movies) => set({ searchResults: movies }),
}));
