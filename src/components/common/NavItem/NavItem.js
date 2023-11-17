import { HashLink} from 'react-router-hash-link';
import { styled } from '@mui/material/styles';

export const NavItem = styled(HashLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));