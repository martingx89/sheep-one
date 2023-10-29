import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { colorAccent, colorDark } from '../../../constants/colors';

const StyledButton = styled(Button)`
  background-color: ${colorAccent};
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
