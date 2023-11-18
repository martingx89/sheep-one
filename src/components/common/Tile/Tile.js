import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Tile = styled(Box)({
  position: 'relative',
  height: '300px',
  width: 'auto',
  padding: '5px',
});
export const TileImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
}));
export const TileContent = styled(Box)({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '20px',
});
