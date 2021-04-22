import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"
import Tips from "../components/Tips"
import { graphql } from "gatsby"
import StyledBackgroundSection from "../components/Background"

export default function Home({ data }) {
  const {
    PostFiles: { nodes: posts },
    projects: { nodes: projects },
    TipFiles: { nodes: tips },
  } = data

  console.log("data", data)
  return (
    <Layout>
      <Hero />
      <StyledBackgroundSection>
        <Projects title="Latest Project" projects={projects} />
      </StyledBackgroundSection>
      <StyledBackgroundSection>
        <Posts title="Latest Posts" posts={posts} />
      </StyledBackgroundSection>
      <StyledBackgroundSection>
        <Tips title="Latest Tips" tips={tips} />
      </StyledBackgroundSection>
    </Layout>
  )
}

export const query = graphql`
  {
    projects: allStrapiProject(limit: 1, sort: { fields: date, order: DESC }) {
      nodes {
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }

        excerpt
        slug
        date(formatString: "YYYY Do MMMM")
        tag {
          id
          name
        }
      }
    }
    PostFiles: allFile(
      filter: { sourceInstanceName: { eq: "posts" }, ext: { eq: ".mdx" } }
      limit: 1
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        sourceInstanceName
        childMdx {
          frontmatter {
            slug
            date(formatString: "YYYY Do MMMM")
            category
            title
            readTime
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
        id
      }
    }
    TipFiles: allFile(
      filter: { sourceInstanceName: { eq: "tips" } }
      limit: 1
      sort: { fields: childrenMdx___frontmatter___date, order: DESC }
    ) {
      nodes {
        sourceInstanceName
        childMdx {
          frontmatter {
            slug
            date(formatString: "YYYY Do MMMM")
            category
            title
            readTime
            excerpt
            image {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
        id
      }
    }
  }
`
