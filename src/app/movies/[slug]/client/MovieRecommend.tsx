"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMoviesRecommendation } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Image from "next/image";

export default function MovieRecommend({ movieId }: { movieId: string }) {
  const {
    data: recommendations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieRecommendations", movieId],
    queryFn: () => fetchMoviesRecommendation(movieId || ""),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!recommendations || recommendations.length === 0)
    return <div>No recommendations found</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {recommendations.map((movie) => (
        <div key={movie.id} className="bg-movie-secondary rounded-lg p-2">
          {movie.image ? (
            <Image
              src={movie.image}
              alt={movie.title}
              width={120}
              height={180}
              className="w-full h-32 object-cover rounded mb-1"
            />
          ) : (
            <div className="w-full h-32 bg-gray-600 rounded mb-1" />
          )}
          <div className="text-sm">{movie.title}</div>
        </div>
      ))}
    </div>
  );
}
