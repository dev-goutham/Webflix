import { useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('dark');
  useLayoutEffect(() => {
    const savedTheme = (window.localStorage.getItem('theme') ||
      'dark') as Theme;
    setTheme(() => {
      window.document.getElementById('root')?.classList.add(savedTheme);
      return savedTheme;
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      window.document.getElementById('root')?.classList.remove(theme);
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      window.document.getElementById('root')?.classList.add(newTheme);
      window.localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  return [theme, toggleTheme];
};

export default useTheme;
