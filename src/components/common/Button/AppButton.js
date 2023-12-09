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

const AppButton = ({ children, onClick, type, variant }) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default AppButton;
