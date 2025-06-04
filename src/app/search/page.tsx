"use client";

import { useMovieStore } from "@/store/movieStore";
import MovieCard from "@/components/movies/MovieCard";

export default function SearchPage() {
  const searchResults = useMovieStore((state) => state.searchResults);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-white mb-6">검색 결과</h1>
      {searchResults.length > 0 ? (
        <MovieCard movies={searchResults} />
      ) : (
        <div className="text-white text-center min-h-[300px] flex items-center justify-center">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
}
