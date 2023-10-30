import { Link } from 'react-router-dom';
import { colorLight } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const NavLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
  display: 'block',
  margin: '2px',
  '&:hover': {
    color: colorLight,
  },
});
