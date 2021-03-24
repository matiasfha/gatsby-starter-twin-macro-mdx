import React from "react";
import { Global, css } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import tw, { styled, GlobalStyles } from "twin.macro";
import NavBar from "./NavBar";

const baseStyles = css`
  body {
    ${tw`bg-blue-50 w-screen h-screen`}
  }
`;

const BaseStyles = () => (
  <>
    <GlobalStyles />
    <Global styles={baseStyles} />
  </>
);

const Container = tw.div`
  flex flex-col
  mx-auto max-w-screen-lg h-screen
`;

const Main = tw.main`flex-grow px-4`;

const Footer = tw.div`
    py-8 bg-gray-200
`;

const H1 = tw.h1`font-bold text-3xl underline py-4`;
const H2 = tw.h2`font-bold text-xl py-4 `;
const P = tw.h1`py-4 max-w-screen-md mx-auto`;

const components = {
  h1: (props) => <H1 {...props} />,
  h2: (props) => <H2 {...props} />,
  p: (props) => <P {...props} />,
};

const Layout = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <BaseStyles />
      <Container>
        <Main>
          <NavBar />
          <MDXProvider components={components}>{children}</MDXProvider>
        </Main>
        <Footer>Footer</Footer>
      </Container>
    </div>
  );
};

export default Layout;
