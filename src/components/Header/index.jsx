import React from 'react';
import './style.css';
import logo from '../../img/logo.png';
import logoWhite from '../../img/logo-white.png';
import {ThemeSwitch} from '../ThemeSwitch'
import { NavLink } from '../NavLink'

export const Header = ({darkMode, setDarkMode}) => {
  const handleThemeChange = (e) => {
    setDarkMode(e.target.checked);
  };

  return (
    <>
      <header className="page-header">
        <nav className="navlink-wrapper">
          <NavLink href="#Home" text="Home" />
          <NavLink href="#about" text="About" />
        </nav>
        <div className="logo">
          <img src={darkMode ? logoWhite : logo} alt="positive choice logo" />
        </div>
        <ThemeSwitch
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
        />
      </header>
    </>
  );
};