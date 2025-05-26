"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 기능 구현
    console.log("Search:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-movie-primary"
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
