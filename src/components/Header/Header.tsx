import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logoLight from '../../assets/light-logo.png';
import logoDark from '../../assets/dark-logo.png';
import Button from '../Button/Button';
import { BsFillMoonFill, BsFillLightbulbFill } from 'react-icons/bs';
import { ThemeContext } from '../../utils/context/ThemeProvider';

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
  transition: 150ms;
`;

const NightModeButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.primary};

  &:focus {
    outline: 0;
  }
`;

const Header = () => {
  // Get the Context
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <Link to="/">
        {theme === 'light' ? (
          <Logo src={logoDark} alt="dark logo" />
        ) : (
          <Logo src={logoLight} alt="light logo" />
        )}
      </Link>
      <HeaderNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Nos freelances</StyledLink>
        <StyledLink to="/survey/1">
          <Button label="Faire le test" />
        </StyledLink>
      </HeaderNav>
      <NightModeButton onClick={() => toggleTheme()}>
        {theme === 'light' ? (
          <BsFillMoonFill size={24} color={colors.backgroundDark} />
        ) : (
          <BsFillLightbulbFill size={24} color={colors.primary} />
        )}
      </NightModeButton>
    </HeaderContainer>
  );
};

export default Header;
