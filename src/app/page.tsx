import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import MovieSection from "@/components/movies/MovieSection";

// 예시 데이터 (실제로는 서버에서 fetch하거나 props로 전달)
const trendingMovies = [
  { id: "1", title: "The Matrix", image: "/matrix.jpg", rating: 4.7 },
  { id: "2", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "3", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "4", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "5", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "6", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "7", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "8", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "9", title: "Inception", image: "/inception.jpg", rating: 4.6 },
  { id: "10", title: "Inception", image: "/inception.jpg", rating: 4.6 },

  // ...더 많은 영화
];
const recentlyAdded = [
  { id: "3", title: "Forrest Gump", image: "/forrest.jpg", rating: 4.8 },
  // ...
];

export default function Home() {
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
