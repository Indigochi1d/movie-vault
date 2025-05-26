"use client";

import { useQuery } from "@tanstack/react-query";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import MovieSection from "@/components/movies/MovieSection";
import { fetchTrendingMovies, Movie } from "@/lib/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
// 예시 데이터 (실제로는 서버에서 fetch하거나 props로 전달)
const recentlyAdded: Movie[] = [
  { id: "3", title: "Forrest Gump", image: "/forrest.jpg", rating: 4.8 },
  // ...
];

export default function Home() {
  const {
    data: trendingMovies = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: fetchTrendingMovies,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-movie-primary">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[50vh]">
            <LoadingSpinner size="large" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full bg-movie-primary">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-red-500 text-center">에러가 발생했습니다.</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-movie-primary">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Discover Your Next Favorite Movie
        </h1>
        <MovieSection title="Trending Now" movies={trendingMovies} />
        <MovieSection title="Recently Added" movies={recentlyAdded} />
        {/* Critically Acclaimed, Explore All Movies 등 추가 */}
      </main>
      <Footer />
    </div>
  );
}
