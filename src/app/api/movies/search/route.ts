import { NextResponse } from "next/server";
import { searchMovies } from "@/lib/api/tmdb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(
      { error: "검색어를 입력해주세요." },
      { status: 400 }
    );
  }

  try {
    const movies = await searchMovies(query);
    return NextResponse.json(movies);
  } catch (error) {
    console.error("영화 검색 중 오류 발생:", error);
    return NextResponse.json(
      { error: "영화 검색 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
