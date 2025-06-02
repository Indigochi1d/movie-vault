"use client";

import { useMovieStore } from "@/store/movieStore";
import { useQuery } from "@tanstack/react-query";
import { Cast, fetchMovieCredits } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function MovieCast() {
  const selectedMovie = useMovieStore((state) => state.selectedMovie);
  const movieId = selectedMovie?.id;

  const {
    data: movieCast,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieCast", movieId],
    queryFn: () => fetchMovieCredits(movieId || ""),
  });
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!movieCast) return <div>No data</div>;

  const casts = movieCast;
  if (casts.length === 0) return <div>No one has been cast yet</div>;

  return (
    <Swiper spaceBetween={16} slidesPerView={"auto"} className="!pb-4">
      {casts.map((cast: Cast) => (
        <SwiperSlide key={cast.id} style={{ width: 120 }}>
          <div className="bg-movie-secondary rounded-lg p-2 w-24 text-center">
            {cast.profile_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
                width={100}
                height={100}
                loading="lazy"
                className="w-16 h-16 object-cover rounded-full mx-auto mb-1"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-1" />
            )}
            <div className="text-sm font-bold">{cast.name}</div>
            <div className="text-xs text-gray-400">{cast.character}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
