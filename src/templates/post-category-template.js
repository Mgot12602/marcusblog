import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

import Posts from "../components/Posts"
import Seo from "../components/Seo"

const postCategoryTemplate = ({ data, pageContext }) => {
  const {
    PostFiles: { nodes: posts },
  } = data
  const { category } = pageContext

  return (
    <>
      <Seo title={`${category} Posts`} />
      <Layout>
        <Posts posts={posts} title={`All posts related to ${category}`} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query PostCategoryQuery($category: String) {
    PostFiles: allFile(
      filter: {
        sourceInstanceName: { eq: "posts" }
        childMdx: { frontmatter: { category: { eq: $category } } }
        ext: { eq: ".mdx" }
      }
    ) {
      distinct(field: sourceInstanceName)
      nodes {
        childMdx {
          frontmatter {
            slug
            date
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
      }
    }
  }
`

export default postCategoryTemplate
