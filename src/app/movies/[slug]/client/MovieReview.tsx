"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMovieReviews, Review } from "@/lib/api/tmdb";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useState } from "react";

const MAX_LENGTH = 300;

export default function MovieReview({ movieId }: { movieId: string }) {
  const {
    data: reviews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movieReviews", movieId],
    queryFn: () => fetchMovieReviews(movieId || ""),
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!reviews || reviews.length === 0) return <div>No reviews found</div>;

  // 각 리뷰의 펼침 상태를 관리
  const [expanded, setExpanded] = useState<{ [id: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Reviews ({reviews.length})</h2>
      <div>
        {reviews.map((review: Review) => {
          const isLong = review.content.length > MAX_LENGTH;
          const isExpanded = expanded[review.id];
          const displayContent =
            isLong && !isExpanded
              ? review.content.slice(0, MAX_LENGTH) + "..."
              : review.content;
          return (
            <div
              key={review.id}
              className="bg-movie-secondary rounded-lg p-4 mb-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold">{review.author}</span>
                {review.rating !== null && (
                  <span className="text-yellow-400">
                    {"★".repeat(Math.round(review.rating) / 2)}
                  </span>
                )}
              </div>
              <div className="text-gray-200 whitespace-pre-line">
                {displayContent}
                {isLong && (
                  <button
                    className="ml-2 text-blue-400 underline text-xs"
                    onClick={() => handleToggle(review.id)}
                  >
                    {isExpanded ? "collapse" : "show more"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
