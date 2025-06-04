"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies, Movie } from "@/lib/api/tmdb";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { roundTo, slugify } from "@/utils/utils";
import { useMovieStore } from "@/store/movieStore";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface MovieCardProps {
  movies?: Movie[];
}

function MovieCardItem({ movie }: { movie: Movie }) {
  const setSelectedMovie = useMovieStore((state) => state.setSelectedMovie);
  const router = useRouter();

  const handleClick = () => {
    console.log(movie.image);
    setSelectedMovie(movie);
    router.push(`/movies/${slugify(movie.title)}`);
  };

  return (
    <div
      className="bg-movie-secondary rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {movie.image.slice(-4) === "null" ? (
        <Image
          src="/images/no_poster.svg"
          alt={movie.title}
          className="w-full h-[300px] object-cover"
          width={300}
          height={180}
        />
      ) : (
        <Image
          src={movie.image}
          alt={movie.title}
          className="w-full h-[300px] object-cover"
          width={300}
          height={180}
        />
      )}
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-yellow-400">★</span>
            <span className="text-white ml-1">
              {roundTo(movie.rating, 1) / 2}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MovieCard({ movies }: MovieCardProps) {
  const {
    data: trendingMovies,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
    enabled: !movies, // movies prop이 없을 때만 trending movies를 가져옴
  });

  const displayMovies = movies || trendingMovies;

  if (isLoading && !movies) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error && !movies) {
    return (
      <div className="text-red-500 text-center min-h-[300px] flex items-center justify-center">
        영화 정보를 불러오는데 실패했습니다.
      </div>
    );
  }

  if (!displayMovies || displayMovies.length === 0) {
    return (
      <div className="text-white text-center min-h-[300px] flex items-center justify-center">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayMovies.map((movie) => (
        <MovieCardItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
