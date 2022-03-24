import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link as ReactRouterDomLink, useLocation } from 'react-router-dom';
import { Toggle } from './Toggle';

const Content = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  border-bottom: 3px solid ${({ theme }) => theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${({ open }) => (open ? 'block' : 'none')};
  font-family: sans-serif;
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${({ theme }) => theme.secondaryColor};
  background: white;

  @media (min-width: 768px) {
    display: flex;
    position: relative;
    left: initial;
    top: initial;

    background: none;
    border-bottom: none;
    margin: auto 0 auto auto;
    width: initial;
  }
`;

const Link = ({ isActive, children, ...props }) => {
  return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
};

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(isActive) => (isActive ? 'bold' : 'inherit')};
  color: black;
`;

const Hamburger = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  height: 25px;
  padding: 5px;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }

  & > div {
    background: black;
    height: 3px;
    width: 100%;
    margin: 5px 0;
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme, setTheme);

  return (
    <Content>
      <Hamburger onClick={() => setOpen((val) => !val)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Menu open={open}>
        <StyledLink to="/" isActive={pathname === '/'}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === '/login'}>
          Login
        </StyledLink>
      </Menu>
      <Toggle />
    </Content>
  );
};

export default Header;
