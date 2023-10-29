import { Button } from '@mui/material';
import styled from 'styled-components';
import { colorDark, colorLight } from '../../../constants/colors';

const StyledButton = styled(Button)`
  background-color: ${colorLight};
  color: #fff;
  &:hover {
    background-color: ${colorDark};
  }
`;

const AppButton = ({ children }) => {
  return (
    <StyledButton type='submit' variant='contained'>
      {children}
    </StyledButton>
  );
};

export default AppButton;
