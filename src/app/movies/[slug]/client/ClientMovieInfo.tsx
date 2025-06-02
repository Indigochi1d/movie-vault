"use client";

import MovieDetail, { MovieTechnicalDetail } from "./MovieDetail";
import MovieCast from "./MovieCast";
import MovieTrailer from "./MovieTrailer";
import MovieRecommend from "./MovieRecommend";
import MovieReview from "./MovieReview";
import { useMovieStore } from "@/store/movieStore";

export default function ClientMovieInfo() {
  const selectedMovie = useMovieStore((state) => state.selectedMovie);
  if (!selectedMovie) return null;
  const movieId = selectedMovie.id;

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-white">
      {/* 상단: 포스터, 제목, 평점, 설명 */}
      <MovieDetail movieId={movieId} />
      {/* 출연진 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Cast & Crew</h2>
        <MovieCast movieId={movieId} />
      </section>
      {/* 트레일러 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Trailer</h2>
        <MovieTrailer movieId={movieId} />
      </section>
      {/* 기술 정보 */}
      <MovieTechnicalDetail movieId={movieId} />
      {/* 관련 영화 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Recommendations</h2>
        <MovieRecommend movieId={movieId} />
      </section>

      {/* 리뷰 */}
      <MovieReview movieId={movieId} />
    </div>
  );
}
