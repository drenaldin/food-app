import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="button-theme-toggle" onClick={toggleTheme}>
      Modo {darkMode ? '☀︎' : '☾'}
    </button>
  );
};

export default ThemeToggleButton;
