import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const Page = ({ pageContext, children }) => {
  return <Layout>{children}</Layout>;
};

export default Page;
