import { Box } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '50px',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
});
