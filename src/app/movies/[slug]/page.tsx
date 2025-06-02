import MovieRecommend from "./client/MovieRecommend";
import MovieDetail, { MovieTechnicalDetail } from "./client/MovieDetail";
import MovieCast from "./client/MovieCast";
import MovieTrailer from "./client/MovieTrailer";

export default function MovieDetailPage() {
  const movie = {
    title: "Interstellar",
    releaseDate: "November 7, 2014",
    rating: 4.2,
    overview:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    technical: {
      genre: "Sci-Fi, Drama, Adventure",
      duration: "2h 49m",
      director: "Christopher Nolan",
      releaseDate: "November 7, 2014",
      language: "English",
      composer: "Hans Zimmer",
    },
    relatedMovies: [
      { title: "Inception" },
      { title: "Arrival" },
      { title: "Oppenheimer" },
      { title: "Blade Runner 2049" },
      { title: "The Martian" },
      { title: "Gravity" },
      { title: "Contact" },
      { title: "Ad Astra" },
      { title: "Minority Report" },
      { title: "Source Code" },
    ],
    reviews: [
      {
        user: "Cinema Critic",
        rating: 5,
        comment: "A monumental achievement in science fiction.",
      },
      {
        user: "Film Enthusiast",
        rating: 5,
        comment: "Visually stunning and thought-provoking. Though a bit long.",
      },
      {
        user: "Casual Viewer",
        rating: 4,
        comment: "Mind-bending! Loved the visuals and the story.",
      },
      {
        user: "Movie Buff",
        rating: 5,
        comment: "Nolan at his finest. A must-watch.",
      },
      {
        user: "SciFi Fan",
        rating: 4,
        comment: "Interesting concepts and some parts felt a little slow.",
      },
      {
        user: "Jane Doe",
        rating: 5,
        comment: "Absolutely blown away. The score is incredible.",
      },
      {
        user: "John Smith",
        rating: 4,
        comment:
          "Great movie, but I'd like to watch it twice to understand everything!",
      },
      {
        user: "Regular Joe",
        rating: 3,
        comment: "Solid sci-fi fare. Worth watching.",
      },
      {
        user: "MusicLover",
        rating: 5,
        comment: "A true masterpiece of cinema.",
      },
      {
        user: "Cinephile",
        rating: 4,
        comment: "Overrated. Good ideas, but execution is flawed.",
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 text-white">
      {/* 상단: 포스터, 제목, 평점, 설명 */}
      <MovieDetail />
      {/* 출연진 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Cast & Crew</h2>
        <MovieCast />
      </section>
      {/* 트레일러 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Trailer</h2>
        <MovieTrailer />
      </section>
      {/* 기술 정보 */}
      <MovieTechnicalDetail />
      {/* 관련 영화 */}
      <MovieRecommend />
      {/* 리뷰 */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Reviews ({movie.reviews.length})
        </h2>
        <div>
          {movie.reviews.map((review, idx) => (
            <div key={idx} className="bg-movie-secondary rounded-lg p-4 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold">{review.user}</span>
                <span className="text-yellow-400">
                  {"★".repeat(review.rating)}
                </span>
              </div>
              <div className="text-gray-200">{review.comment}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
