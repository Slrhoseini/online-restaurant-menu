import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcone, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
const Navbar = ({ toggle }) => {
	return (
  	<>
    	<Nav>
        <NavbarContainer>
          <NavLogo to="/">
            Burzza
            بِرزا
          </NavLogo>
          <MobileIcone onClick={toggle}>
            <FaBars />
          </MobileIcone>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="starter">Starter</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pizzas">Pizzas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="burgers">Burgers</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="drinks">Drinks</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;