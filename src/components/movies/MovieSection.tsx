import MovieCard from "@/components/movies/MovieCard";

interface MovieSectionProps {
  title: string;
}

export default function MovieSection({ title }: MovieSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
      <MovieCard />
    </section>
  );
}
