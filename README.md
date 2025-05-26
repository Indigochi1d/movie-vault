## My Movie Shelf

본 프로젝트는 Next.js with App router + Tanstack Query + Zustand + Tailwindcss v4를 사용하여 간단한 영화 컬렉션 어플리케이션을 제작해보는 것에 있습니다.


## 🛠 기술 스택 학습 포인트

| 기술 | 역할 |
|------|------|
| **Next.js App Router** | 라우팅, SSR, 레이아웃, 동적 페이지 구성 |
| **TanStack Query** | 서버 상태 관리, API 요청, 캐싱 |
| **Zustand** | 클라이언트 상태 (즐겨찾기, 테마, UI 등) 관리 |
| **Tailwind CSS** | 반응형 스타일링, 빠른 UI 구성 |

---

## ✨ 주요 기능

| 기능 | 학습 포인트 |
|------|-------------|
| 영화 리스트 조회 | `useQuery()`로 API 호출 및 캐싱 |
| 영화 상세 페이지 | App Router의 동적 라우팅 (`[id]/page.tsx`) |
| 즐겨찾기 추가/삭제 | Zustand 상태 조작 및 전역 관리 |
| 다크모드 토글 | Zustand로 상태 저장 + Tailwind 다크모드 |
| 검색/필터 UI | Zustand로 검색 조건 관리 |
| SSR로 데이터 패칭 | `fetch()` + `cache: 'no-store'` |
| 로딩, 에러 처리 | `loading.tsx`, `error.tsx`, `not-found.tsx` 사용 |

🎬 This project uses data from [The Movie Database (TMDB)](https://www.themoviedb.org/) API for movie information, including titles, posters, ratings, and descriptions.

📝 This product uses the TMDB API but is not endorsed or certified by TMDB.
