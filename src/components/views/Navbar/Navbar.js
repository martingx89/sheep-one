import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.scss';

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(!open)} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <nav>
      <Link to='/' className={styles.title}>
        Website
      </Link>
      <ul>
        <li>
          <NavLink to='/news'>News</NavLink>
        </li>
        <li>
          <NavLink to='/catalog'>Catalog</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
    </>
    
  );
};

export default Navbar;
