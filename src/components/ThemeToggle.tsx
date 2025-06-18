
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="relative p-1 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 outline-none"
      aria-label="Toggle theme"
      style={{ width: 28, height: 28 }}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-all duration-500">
        <Sun
          className={`transition-all duration-500 w-4 h-4 text-yellow-400 ${
            theme === 'light'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-45 scale-90'
          }`}
        />
        <Moon
          className={`absolute transition-all duration-500 w-4 h-4 text-gray-700 dark:text-gray-200 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 rotate-45 scale-90'
          }`}
        />
      </span>
    </button>
  );
};

export default ThemeToggle;
