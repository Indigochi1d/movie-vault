"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies, Movie } from "@/lib/api/tmdb";
import Image from "next/image";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface MovieCardProps {
  movie: Movie;
}

function MovieCardItem({ movie }: MovieCardProps) {
  return (
    <div className="bg-movie-secondary rounded-lg overflow-hidden shadow-lg">
      <Image
        src={movie.image}
        alt={movie.title}
        className="w-full h-[300px] object-cover"
        width={300}
        height={180}
      />
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center">
          <span className="text-yellow-400">★</span>
          <span className="text-white ml-1">{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default function MovieCard() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center min-h-[300px] flex items-center justify-center">
        영화 정보를 불러오는데 실패했습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {movies?.map((movie) => (
        <MovieCardItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
