import { HashLink } from 'react-router-hash-link';
import { styled } from '@mui/styles';

export const NavItem = styled(HashLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
  '&.active': {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
}));