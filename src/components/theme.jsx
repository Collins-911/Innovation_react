
import React from 'react';
import { FaMoon } from 'react-icons/fa';
import '../css/theme.css';

export default function ThemeToggle({ onClick }) {
  return (
    <div className="theme-toggle" onClick={onClick}>
      <FaMoon size={24} />
    </div>
  );
}
