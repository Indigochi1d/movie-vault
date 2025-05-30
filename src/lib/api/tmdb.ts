interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface TMDBResponse {
  results: TMDBMovie[];
}

export interface Movie {
  id: string;
  title: string;
  image: string;
  rating: number;
}

export async function fetchMoviesRecommendation(
  movieId: string
): Promise<Movie[]> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies recommendation");
    }

    const data: TMDBResponse = await res.json();

    return data.results.map((movie) => ({
      id: movie.id.toString(),
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
    }));
  } catch (error) {
    console.error("Error fetching movies recommendation:", error);
    return [];
  }
}

export async function fetchTrendingMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch trending movies");
    }

    const data: TMDBResponse = await res.json();
    console.log("data:", data);

    return data.results.map((movie) => ({
      id: movie.id.toString(),
      title: movie.title,
      image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      rating: movie.vote_average,
    }));
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
