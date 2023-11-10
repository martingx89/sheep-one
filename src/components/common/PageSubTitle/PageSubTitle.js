import { Box, Typography } from '@mui/material';

export const PageSubTitle = ({ children }) => {
  return (
    <Box>
      <Typography variant='h2'>{children}</Typography>
    </Box>
  );
};

export default PageSubTitle;
