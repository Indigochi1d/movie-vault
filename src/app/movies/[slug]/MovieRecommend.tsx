"use client";

import Image from "next/image";
import { useMovieStore } from "@/store/movieStore";
import { useQuery } from "@tanstack/react-query";
import { fetchMoviesRecommendation } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function MovieRecommend() {
  const selectedMovie = useMovieStore((state) => state.selectedMovie);
  const movieId = selectedMovie?.id;
  console.log("movieId:", movieId);
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie-recommendations", movieId],
    queryFn: () => fetchMoviesRecommendation(movieId || ""),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!movies) return <div>No data</div>;
  console.log("movies:", movies);

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Related Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <div key={movie.title} className="bg-movie-secondary rounded-lg p-2">
            {movie.image ? (
              <Image
                src={movie.image}
                alt={movie.title}
                width={300}
                height={128}
                className="w-full h-32 object-cover"
              />
            ) : (
              <div className="w-full h-32 bg-gray-600 rounded mb-1" />
            )}
            <div className="text-sm">{movie.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
