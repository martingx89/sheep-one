import { Link } from 'react-router-dom';
import { colorDark } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const Logo = styled(Link)({
  textDecoration: 'none',
  color: colorDark,
  display: 'block',
  margin: '2px',
});
