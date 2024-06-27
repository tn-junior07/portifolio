import React from 'react';
import { 
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, 
  GitHubButton, ButtonContainer, MobileIcon, MobileMenu, 
  MobileLink, B, ToggleThemeContainer 
} from './NavBarStyledComponent';
import { DiReact } from "react-icons/di";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import ToggleTheme from './ToggleTheme';

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const handleMenuToggle = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <DiReact size="3rem" style={{color: theme.text_primary}} /> <Span>Tn</Span><B>Dev</B>
          </a>
        </NavLogo>
        <MobileIcon onClick={handleMenuToggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        <NavItems>
          <ToggleTheme toggleTheme={toggleTheme} darkMode={darkMode} />
        </NavItems>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={handleLinkClick}>About</MobileLink>
            <MobileLink href='#skills' onClick={handleLinkClick}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={handleLinkClick}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={handleLinkClick}>Projects</MobileLink>
            <MobileLink href='#education' onClick={handleLinkClick}>Education</MobileLink>
            <ToggleThemeContainer>
              <ToggleTheme toggleTheme={toggleTheme} darkMode={darkMode} />
            </ToggleThemeContainer>
            <GitHubButton 
              style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }} 
              href={Bio.github} 
              target="_blank"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;