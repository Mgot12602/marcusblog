import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Tips from "../components/Tips"
import Seo from "../components/Seo"

const blog = ({ data, pageContext }) => {
  const {
    TipFiles: { nodes: tips },
  } = data
  const { category } = pageContext
  console.log("category", category)
  console.log("tips", tips)
  return (
    <>
      <Seo title={`${category} Tips`} />
      <Layout>
        <Tips tips={tips} title={`All tips related to ${category}`} />
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
                gatsbyImageData
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
