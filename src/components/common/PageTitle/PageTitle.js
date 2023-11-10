import { Box, Typography } from '@mui/material';

export const PageTitle = ({ children }) => {
  return (
    <Box>
      <Typography variant='h1'>{children}</Typography>
    </Box>
  );
};

export default PageTitle;
