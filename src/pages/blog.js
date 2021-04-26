import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Posts from "../components/Posts"
import Seo from "../components/Seo"

const blog = ({ data }) => {
  const {
    PostFiles: { nodes: posts },
  } = data
  console.log("posts", posts)
  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <Posts posts={posts} title="All posts" />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    PostFiles: allFile(
      filter: { sourceInstanceName: { eq: "posts" }, ext: { eq: ".mdx" } }
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
