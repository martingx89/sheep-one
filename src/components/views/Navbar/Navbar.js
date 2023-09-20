import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Website</Link>
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
