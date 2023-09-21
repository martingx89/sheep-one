import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div onClick={() => setOpen(!open)} className={styles['nav-icon']}>
          {open ? <FiX /> : <FiMenu />}
        </div>
        <Link to='/' className={styles.title} onClick={() => setOpen(false)}>
        Website
        </Link>
        <ul className={open ? `${styles['nav-links']} active` : styles['nav-links']}>
          <li>
            <NavLink to='/news' onClick={() => setOpen(false)}>News</NavLink>
          </li>
          <li>
            <NavLink to='/catalog' onClick={() => setOpen(false)}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={() => setOpen(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to='contact' onClick={() => setOpen(false)}>Contact</NavLink>
          </li>
        </ul>
    </nav>
    </>
    
  );
};

export default Navbar;
