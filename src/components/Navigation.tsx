
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="fixed top-7 left-7 z-50 font-mono">
      <div className="flex items-center gap-3">
        <span className="text-xs font-light text-gray-400 dark:text-gray-600 select-none">ak</span>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
