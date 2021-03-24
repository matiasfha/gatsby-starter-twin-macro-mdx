import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostOrProject = ({ data: { mdx } }) => {
  const image = getImage(mdx.featuredImage);
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.type}</h2>
      <GatsbyImage image={image} alt={mdx.frontmatter.title} />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default PostOrProject;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        type
        client
        description
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData(width: 300, placeholder: BLURRED)
        }
      }
      body
    }
  }
`;
