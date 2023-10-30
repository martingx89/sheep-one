import { colorApp } from '../../../constants/colors';
import { styled } from '@mui/styles';

export const AppBar = styled('div')({
  backgroundColor: colorApp,
  borderBottom: '3px solid transparent',
  borderRadius: '3px',
  boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
  margin: '5px',
  height: '50px',
});
