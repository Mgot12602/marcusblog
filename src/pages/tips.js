import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Tips from "../components/Tips"
import Seo from "../components/Seo"

const blog = ({ data }) => {
  const {
    TipFiles: { nodes: tips },
  } = data

  return (
    <>
      <Seo title="Tips" />
      <Layout>
        <Tips tips={tips} title="All tips" />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    TipFiles: allFile(
      filter: { sourceInstanceName: { eq: "tips" }, ext: { eq: ".mdx" } }
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
export default blog
