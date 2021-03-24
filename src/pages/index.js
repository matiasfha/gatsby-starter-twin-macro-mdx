import * as React from "react";
import { graphql, Link } from "gatsby";
import tw, { styled } from "twin.macro";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import PostCard from "../components/PostCard";

const Title = tw.h1`
text-4xl text-blue-600 mt-8 font-bold mb-2
`;

const Copy = tw.p`text-gray-600 mb-6`;

const ProjectsContainer = tw.div`grid grid-cols-2 gap-2 my-4`;
const PostsContainer = tw.div`grid grid-cols-3 gap-2 my-4`;

// markup
const IndexPage = ({ data: { posts, projects, allFeedFreecodecamp } }) => {
  return (
    <Layout>
      <Hero />
      <Title>Featured work</Title>
      <Copy>Here you will find some of my best projects</Copy>
      <ProjectsContainer>
        {projects.nodes.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              item={{ ...project, ...project.frontmatter }}
            />
          );
        })}
      </ProjectsContainer>
      <br />
      <Title>Articles</Title>
      <Copy>Here you will find some of my best projects</Copy>
      <PostsContainer>
        {posts.nodes.map((post) => {
          return (
            <PostCard key={post.id} item={{ ...post, ...post.frontmatter }} />
          );
        })}
      </PostsContainer>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query MyContent {
    projects: allMdx(filter: { frontmatter: { type: { eq: "project" } } }) {
      nodes {
        id
        slug
        timeToRead
        frontmatter {
          title
          type
          description
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
      }
    }
    posts: allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
      nodes {
        id
        slug
        timeToRead
        frontmatter {
          title
          type
          description
        }
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
