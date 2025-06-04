"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useMovieStore } from "@/store/movieStore";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const setSearchResults = useMovieStore((state) => state.setSearchResults);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(
        `/api/movies/search?query=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();
      setSearchResults(data);
      router.push("/search"); // 검색 결과 페이지로 이동
    } catch (error) {
      console.error("검색 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-movie-primary w-full"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        <FiSearch className="text-white" />
      </button>
    </form>
  );
};
