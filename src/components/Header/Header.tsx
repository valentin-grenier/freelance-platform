import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

type StyledLinkProps = {
  $isButton?: boolean;
};

const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 1em;
  color: ${colors.primary};
  transition: 150ms;

  ${(props: any) =>
    props.$isButton &&
    `background: ${colors.secondary};
    color: #fff;
    padding: 0.25em 1em;
    border-radius: 1em;
    transition: 150ms;

    &:hover {
      color: #fff;
      transform: rotate(-5deg);
    }
  `};
`;

const Header = () => {
  return (
    <header>
      <HeaderNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
        <StyledLink to="/contact" $isButton>
          Contact
        </StyledLink>
      </HeaderNav>
    </header>
  );
};

export default Header;
