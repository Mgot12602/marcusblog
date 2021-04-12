import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

const projectsindex = ({ data }) => {
  const {
    projects: { nodes: projects },
  } = data
  console.log("projects", projects)
  return (
    <Layout>
      <Projects projects={projects} title="All projects" />
    </Layout>
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
      }
    }
  }
`

export default projectsindex
