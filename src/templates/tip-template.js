import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const posttemplate = ({ data }) => {
  const {
    tip: {
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

  console.log("data in tips", data)

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
          <Link to="/tips">Back to All Tips</Link>
        </button>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleTip($slug: String) {
    tip: allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          author
          category
          slug
          date(formatString: "YYYY Do MMMM")
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
