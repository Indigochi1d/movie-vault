import MovieSection from "@/components/movies/MovieSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Discover Your Next Favorite Movie
      </h1>
      <MovieSection title="Trending Now" />
    </main>
  );
}
