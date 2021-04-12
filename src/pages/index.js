import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Posts from "../components/Posts"
import Tips from "../components/Tips"
import { graphql } from "gatsby"

export default function Home({ data }) {
  const {
    projects: { nodes: projects },
  } = data

  console.log(projects)
  return (
    <Layout>
      <Hero />
      <Projects title="Latest Project" projects={projects} />
      <Posts />
      <Tips />
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
      }
    }
  }
`
