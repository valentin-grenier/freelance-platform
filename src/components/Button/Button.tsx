import { styled } from 'styled-components';
import colors from '../../utils/style/colors';

interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  background: ${colors.secondary};
  border-radius: 2em;
  transition: 200ms;
  padding: 0.5em 1.5em;

  &:hover {
    transform: translateX(0.5em);
  }
`;

const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <StyledButton>{label}</StyledButton>
    </>
  );
};

export default Button;
