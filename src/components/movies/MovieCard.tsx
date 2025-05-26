"use client";

import Image from "next/image";

interface Movie {
  id: string;
  title: string;
  image?: string;
  rating: number;
}

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-[#232733] rounded-lg overflow-hidden shadow-md flex flex-col">
      {movie.image ? (
        <Image
          src={movie.image}
          alt={movie.title}
          width={300}
          height={180}
          className="object-cover w-full h-44"
        />
      ) : (
        <div className="bg-gray-700 w-full h-44 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}
      <div className="p-3">
        <div className="font-semibold text-white truncate">{movie.title}</div>
        <div className="text-xs text-gray-400 mt-1">⭐ {movie.rating}</div>
      </div>
    </div>
  );
}
