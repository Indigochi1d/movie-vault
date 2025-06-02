"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { minutesToHours } from "@/utils/utils";
import Image from "next/image";

export function MovieTechnicalDetail({ movieId }: { movieId: string }) {
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
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
        <div>
          <div>Duration: {minutesToHours(movieDetail.runtime)}</div>
          <div>Director: {movieDetail.director}</div>
        </div>
        <div>
          <div>Release Date: {movieDetail.releaseDate}</div>
          <div>
            Language:{" "}
            {movieDetail.spoken_languages
              .map((language) => language.english_name)
              .join(", ")}
          </div>
          <div>Composer: {movieDetail.composer}</div>
        </div>
      </div>
    </section>
  );
}

export default function MovieDetail({ movieId }: { movieId: string }) {
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
