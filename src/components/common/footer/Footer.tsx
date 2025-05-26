import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#181d26] py-16 flex flex-col items-center">
      {/* 상단 로고 */}
      <div className="mb-6">
        <span className="text-xl font-bold text-white">MovieVault</span>
      </div>
      {/* 구독 영역 */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-lg md:text-2xl font-bold text-white mb-4 text-center">
          Stay up to date with new movies
        </h2>
        <form className="flex flex-row items-center">
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail />
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-10 pr-4 py-2 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-movie-primary w-72 md:w-96"
            />
          </div>
          <button
            type="submit"
            className="ml-3 px-6 py-2 rounded-md bg-[#f25f7a] text-white font-semibold hover:bg-[#e14c68] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
      {/* 좌측 하단: 언어 선택 */}
      <div className="absolute left-8 bottom-8">
        <button className="px-4 py-2 rounded-md bg-[#232733] text-gray-300 text-sm">
          English
        </button>
      </div>
      {/* 중앙 하단: 저작권 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
        © 2023 MovieVault.
      </div>
      {/* 우측 하단: 소셜 아이콘 */}
      <div className="absolute right-8 bottom-8 flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FiTwitter className="text-gray-400 hover:text-white text-2xl transition-colors" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-gray-400 hover:text-white text-2xl transition-colors" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
