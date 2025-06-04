import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "./SearchBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-movie-secondary">
      {/* 좌측: 로고 및 네비게이션 */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="MovieVault Logo"
            width={46}
            height={42}
            priority
          />
          <span className="text-2xl font-bold text-white">MovieVault</span>
        </Link>
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-white hover:text-red-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/favorites"
            className="text-white hover:text-red-primary transition-colors"
          >
            Favorites
          </Link>
        </nav>
      </div>

      {/* 우측: 검색창 및 다크모드 토글 */}
      <div className="flex items-center space-x-4">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
