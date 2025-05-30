import { create } from "zustand";
import { Movie } from "@/lib/api/tmdb";

interface MovieState {
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
}));
