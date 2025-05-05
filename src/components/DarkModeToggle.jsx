import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggleDark() {
    setDark((prev) => {
      if (!prev) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return !prev;
    });
  }

  return (
    <button
      aria-label="Toggle dark mode"
      className="fixed bottom-6 right-6 z-50 bg-white dark:bg-zinc-900 text-primary dark:text-white p-3 rounded-full shadow-lg transition hover:bg-accent hover:text-white"
      onClick={toggleDark}
    >
      {dark ? (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 13.64A9 9 0 0 1 12 3v0a9 9 0 1 0 9.64 10.64z"/>
        </svg>
      ) : (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5"/>
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34l-1.41-1.41m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/>
        </svg>
      )}
    </button>
  );
}
