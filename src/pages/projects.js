import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const projectsindex = ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Projects" />
      <Layout>
        <Projects projects={projects} title="All projects" />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    projects: allStrapiProject(sort: { fields: date, order: DESC }) {
      nodes {
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        date(formatString: "YYYY MMMM")
        excerpt
        slug
        tag {
          id
          name
        }
      }
    }
  }
`

export default projectsindex
