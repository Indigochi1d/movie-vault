import MovieList from "@/components/movies/MovieList";

interface Movie {
  id: string;
  title: string;
  image?: string;
  rating: number;
}

interface MovieSectionProps {
  title: string;
  movies: Movie[];
}

export default function MovieSection({ title, movies }: MovieSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <MovieList movies={movies} />
    </section>
  );
}
