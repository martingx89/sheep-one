import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.scss';

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
        <Link to='/'>Website</Link>
      </div>

      <div className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li>
          <NavLink to='/news' className={styles.active} onClick={closeMenu}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to='/catalog' className={styles.active} onClick={closeMenu}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className={styles.active} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className={styles.active} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
