import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import tw, { styled } from "twin.macro";

const Header = tw.header`w-full bg-gray-100 border-b border-gray-200`;
const HeaderContainer = tw.div`container grid grid-cols-12 items-center justify-between h-16 px-6 mx-auto`;
const Logo = tw.div`h-8 w-auto col-span-2`;
const Nav = tw.nav`flex flex-row relative items-center justify-end flex-1 col-span-10`;
const NavItem = tw(Link)`py-2 text-gray-800 opacity-75 hover:opacity-100 mx-8`;

const NavBar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Logo>
          <a href="/" title="colbyashy maru">
            <StaticImage
              alt="logo"
              src="https://static.vecteezy.com/system/resources/previews/000/626/625/original/green-leaf-logo-vector.jpg"
              placeholder="blurred"
              layout="fixed"
              height={32}
            />
          </a>
        </Logo>
        <Nav>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/blog">Blog</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/about">About</NavItem>
        </Nav>
      </HeaderContainer>
    </Header>
  );
};
export default NavBar;
