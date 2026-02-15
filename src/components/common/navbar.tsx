import { useThemeContext } from '@/contexts/theme-provider';

export default function Navbar() {
  const { toggleTheme, theme } = useThemeContext();

  return (
    <nav className="py-5 border-b border-indigo-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div>
          <h1 className="select-none cursor-default text-indigo-500">Store</h1>
        </div>

        <div>
          <button
            onClick={toggleTheme}
            className="bg-card capitalize p-2 py-1 text-neutral-50 text-sm rounded-2xl cursor-pointer">
            {theme === 'dark' ? '☀️' : '🌑'}
          </button>
        </div>
      </div>
    </nav>
  );
}
