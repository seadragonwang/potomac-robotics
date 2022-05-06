import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrapper, SidebarWrapper, SidebarLink, SidebarMenu, SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="About" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                    Discover
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                    Services
                </SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>
                    Sign Up
                </SidebarLink>
           </SidebarMenu>
            <SideBtnWrapper>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrapper>
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;