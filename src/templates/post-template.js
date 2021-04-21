import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const posttemplate = ({ data }) => {
  const {
    post: {
      nodes: [
        {
          body,
          frontmatter: {
            title,
            author,
            category,
            slug,
            date,
            image: {
              childImageSharp: { gatsbyImageData: image },
            },
          },
        },
      ],
    },
  } = data

  console.log("data in post", data)

  return (
    <Layout>
      <section>
        <article>
          <h1>{title}</h1>
          <h3>{date}</h3>
          <GatsbyImage image={image} alt={title} />
          <MDXRenderer>{body}</MDXRenderer>

          <p>{author}</p>
        </article>
        <button>
          <Link to="/blog">Back to All Posts</Link>
        </button>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          author
          category
          slug
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  }
`

export default posttemplate
