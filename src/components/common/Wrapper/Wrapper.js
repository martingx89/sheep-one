import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Box)((theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '90px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
}));
