import { HashLink } from 'react-router-hash-link';
import { colorLight } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const NavLink = styled(HashLink)({
  textDecoration: 'none',
  color: 'black',
  display: 'block',
  margin: '2px',
  '&:hover': {
    color: colorLight,
  },
});
