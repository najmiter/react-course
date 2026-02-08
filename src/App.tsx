import React from 'react';
import { useTheme } from '@/hooks/use-theme';

// 1. it must start with the 'use'
// 2. it must NOT be called conditionally
// 3. it must be called inside a component or another hook

export default function App() {
  const { toggleTheme } = useTheme();

  React.useEffect(() => {
    document.documentElement.setAttribute('class', localStorage.getItem('theme') ?? 'dark');
  }, []);

  return (
    <div
      className={`grid h-svh place-content-center gap-5 bg-slate-50 text-[#181818] dark:bg-[#181818] dark:text-slate-50`}>
      <button
        onClick={toggleTheme}
        className="p-3 rounded-xl bg-indigo-500 cursor-pointer hover:bg-indigo-600 transition-color">
        Toggle Theme
      </button>
      <h1 className="text-7xl font-mono">Hello World</h1>
    </div>
  );
}
