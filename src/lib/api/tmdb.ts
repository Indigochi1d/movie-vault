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

// TMDB API 응답 타입 (내부에서만 사용)
interface TMDBMovieDetail {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  runtime: number;
}

export interface MovieDetail {
  id: string;
  title: string;
  image: string;
  rating: number;
  overview: string;
  releaseDate: string;
  runtime: number;
}

export interface Cast {
  id: string;
  profile_path: string;
  name: string;
  character: string;
}

interface TMDBMovieCast {
  cast: Cast[];
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

export async function fetchMovieDetail(movieId: string): Promise<MovieDetail> {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch movie detail");
    }
    const data: TMDBMovieDetail = await res.json();

    return {
      id: data.id.toString(),
      title: data.title,
      image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      rating: data.vote_average,
      overview: data.overview,
      releaseDate: data.release_date,
      runtime: data.runtime,
    };
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
}

export async function fetchMovieCredits(movieId: string): Promise<Cast[]> {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch movie credits");
    }
    const data: TMDBMovieCast = await res.json();
    return data.cast.map((cast) => ({
      id: cast.id.toString(),
      profile_path: cast.profile_path,
      name: cast.name,
      character: cast.character,
    }));
  } catch (error) {
    console.error("Error fetching movie credits:", error);
    return [];
  }
}
