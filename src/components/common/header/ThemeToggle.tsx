"use client";

import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // 다크모드 토글 기능 구현
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-white/10 transition-colors"
    >
      {isDarkMode ? (
        <FiSun className="text-white text-xl" />
      ) : (
        <FiMoon className="text-white text-xl" />
      )}
    </button>
  );
};
