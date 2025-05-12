import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggleButton = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button className="button-theme-toggle" onClick={toggleTheme}>
      Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
    </button>
  );
};

export default ThemeToggleButton;
