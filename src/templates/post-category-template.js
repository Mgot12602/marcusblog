import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Posts from "../components/Posts"

const postCategoryTemplate = ({ data, pageContext }) => {
  console.log("cata in category", pageContext)
  const {
    PostFiles: { nodes: posts },
  } = data
  const { category } = pageContext
  console.log("posts", posts)
  return (
    <Layout>
      <Posts posts={posts} title={`All posts related to ${category}`} />
    </Layout>
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
