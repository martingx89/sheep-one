import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
// import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <Link to='/' className={styles.title}>
        Website
      </Link>
      <div onClick={handleClick} className='nav-icon'>
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? `${styles['nav-links']} active` : `${styles['nav-links']}`}>
        <li className={`${styles['nav-item']}`}>
          <NavLink to='/' className={`${styles['nav-link']}`} onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className={`${styles['nav-link']}`} onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/news' className={`${styles['nav-link']}`} onClick={closeMenu}>
            Shop
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact' className={`${styles['nav-link']}`} onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
