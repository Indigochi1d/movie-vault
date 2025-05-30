"use client";

import { useMovieStore } from "@/store/movieStore";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { minutesToHours } from "@/utils/utils";
import Image from "next/image";

export default function MovieDetail() {
  const selectedMovie = useMovieStore((state) => state.selectedMovie);
  const movieId = selectedMovie?.id;

  const {
    data: movieDetail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieDetail", movieId],
    queryFn: () => fetchMovieDetail(movieId || ""),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!movieDetail) return <div>No data</div>;

  return (
    <div className="flex gap-8">
      <Image
        src={movieDetail?.image}
        alt={movieDetail?.title}
        width={500}
        height={280}
        className="w-48 h-64 object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold">{movieDetail?.title}</h1>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-lg">{movieDetail?.rating}</span>
        </div>
        <div className="w-full flex flex-row space-x-3 mt-2 text-gray-300">
          <div>{movieDetail?.releaseDate}</div>
          <div>{minutesToHours(movieDetail?.runtime)}</div>
        </div>
        <p className="mt-4">{movieDetail?.overview}</p>
      </div>
    </div>
  );
}
