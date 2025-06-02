export async function fetchTrendingMovies() {
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
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    return [];
  }
}
