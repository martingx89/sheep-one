import { HashLink } from 'react-router-hash-link';
import { colorAccent, colorDark, colorLight } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const NavItem = styled(HashLink)({
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
