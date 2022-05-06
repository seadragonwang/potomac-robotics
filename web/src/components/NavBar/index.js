import React, {useEffect, useState} from 'react'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import {FaBars} from "react-icons/fa"
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll'
import smooth from 'react-scroll/modules/mixins/smooth'

const NavBar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
         if(window.scrollY >= 80){
            setScrollNav(true)
         }else{
             setScrollNav(false)
         }
     };

     useEffect(() => {
         window.addEventListener('scroll', changeNav);
     }, []);

     const toggleHome = () => {
         scroll.scrollToTop()
     }
  return (
    <>
    <IconContext.Provider value={{color: 'red'}}>
        <Nav scrollNav={scrollNav}>
            <NavBarContainer>
                <NavLogo to="/" onClick={toggleHome}>Potomac Robotics</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavBarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default NavBar;