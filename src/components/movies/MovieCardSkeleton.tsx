"use client";

export default function MovieCardSkeleton() {
  return (
    <div className="bg-[#232733] rounded-lg overflow-hidden shadow-md animate-pulse flex flex-col">
      <div className="bg-gray-700 w-full h-44" />
      <div className="p-3">
        <div className="h-4 bg-gray-600 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-600 rounded w-1/4" />
      </div>
    </div>
  );
}
