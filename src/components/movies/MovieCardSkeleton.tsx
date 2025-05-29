"use client";

export default function MovieCardSkeleton() {
  return (
    <div className="bg-movie-secondary rounded-lg overflow-hidden shadow-lg animate-pulse">
      <div className="w-full h-[300px] bg-gray-700" />
      <div className="p-4">
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2" />
        <div className="h-5 bg-gray-700 rounded w-1/4" />
      </div>
    </div>
  );
}
