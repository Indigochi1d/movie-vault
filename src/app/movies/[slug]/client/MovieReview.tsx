"use client";

export default function MovieReview({ movieId }: { movieId: string }) {
  return (
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
  );
}
