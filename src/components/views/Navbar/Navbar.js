import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { PAGE_TITLE } from '../../../constants/pageSetup';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to='/'>{PAGE_TITLE}</Link>
      </div>

      <div className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li>
          <NavLink to='/' className={styles.active} onClick={closeMenu}>
            Strona domowa
          </NavLink>
        </li>
        <li>
          <NavLink to='/catalog' className={styles.active} onClick={closeMenu}>
            Trasy
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={styles.active} onClick={closeMenu}>
            O nas
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={styles.active} onClick={closeMenu}>
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
