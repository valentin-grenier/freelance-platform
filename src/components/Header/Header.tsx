import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from '../../assets/light-logo.png';
import Button from '../Button/Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

const Logo = styled.img`
  max-width: 10em;
`;

type StyledLinkProps = {
  $isButton?: boolean;
};

const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 1em;
  color: ${colors.primary};
  transition: 150ms;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <HeaderNav>
        <StyledLink to="/">Accueil</StyledLink>

        <StyledLink to="/freelances">Nos freelances</StyledLink>
        <StyledLink to="/survey/1">
          <Button label="Faire le test" />
        </StyledLink>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
