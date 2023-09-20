import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav>
      <Link to='/' className={styles.title}>
        Website
      </Link>
      <ul>
        <li>
          <Link to='/news'>News</Link>
        </li>
        <li>
          <Link to='/catalog'>Catalog</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
