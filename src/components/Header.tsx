import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, X, Bell, Heart } from 'lucide-react';

const HeaderContainer = styled.header`
  background: ${props => props.theme.colors.spiritual.saffron};
  box-shadow: ${props => props.theme.shadows.lg};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.md} 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: ${props => props.theme.spacing.lg};
  padding-right: ${props => props.theme.spacing.lg};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  font-size: ${props => props.theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.spiritual.gold};
  }
`;

const OmSymbol = styled.span`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.spiritual.gold};
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.spiritual.saffron};
    flex-direction: column;
    padding: ${props => props.theme.spacing.xl};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    transition: transform 0.3s ease;
    box-shadow: ${props => props.theme.shadows.xl};
  }
`;

const NavLink = styled(Link)<{ isActive: boolean }>`
  color: ${props => props.isActive ? props.theme.colors.spiritual.gold : props.theme.colors.white};
  font-weight: 500;
  text-decoration: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.spiritual.gold};
    background: rgba(255, 255, 255, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.spiritual.gold};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  ${props => props.isActive && `
    &::after {
      width: 100%;
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
`;

const ActionButton = styled.button`
  background: ${props => props.theme.colors.spiritual.gold};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.spiritual.lightGold};
    transform: translateY(-2px);
  }
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/timings', label: 'Timings' },
    { path: '/events', label: 'Events' },
    { path: '/live-darshan', label: 'Live Darshan' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <OmSymbol>🕉️</OmSymbol>
          <span className="text-devanagari">खेड़ापति सरकार मंदिर</span>
        </Logo>

        <NavLinks isOpen={isMenuOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>

        <ActionButtons>
          <ActionButton as={Link} to="/donation">
            <Heart size={16} />
            Donate
          </ActionButton>
          <ActionButton as={Link} to="/puja-booking">
            <Bell size={16} />
            Book Puja
          </ActionButton>
          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </ActionButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;