import { NavLink } from 'react-router-dom';
import { colorAccent, colorDark, colorLight } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const NavItem = styled(NavLink)({
  textDecoration: 'none',
  color: colorLight,
  '&:hover': {
    color: colorDark,
  },
  '&.active': {
    fontWeight: 'bold',
    color: colorAccent,
  },
});
