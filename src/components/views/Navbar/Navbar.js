import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to='/'>Logo</Link>
      </div>

      <div className={`${styles.menuToggle} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li>
          <NavLink to='/news' activeClassName={styles.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to='/catalog' activeClassName={styles.active}>
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
