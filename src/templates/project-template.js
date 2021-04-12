import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

const projecttemplate = ({ data }) => {
  console.log("data", data)

  const {
    project: {
      nodes: [
        {
          title,
          desc,
          date,
          tags,
          image: {
            childImageSharp: { gatsbyImageData: image },
          },
        },
      ],
    },
  } = data

  console.log("data", data)
  console.log("tags", tags)
  return (
    <Layout>
      <section>
        <article>
          <h1>{title}</h1>
          <h3>{date}</h3>
          <GatsbyImage image={image} alt={title} />
          <p>{desc}</p>
          {tags.map(tag => (
            <span>{`${tag.name} `}</span>
          ))}
        </article>
        <button>
          <Link to="/projects">Back to All projects</Link>
        </button>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($slug: String) {
    project: allStrapiProject(filter: { slug: { eq: $slug } }) {
      nodes {
        slug
        title
        desc
        tags: tag {
          name
        }

        image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
        date(formatString: "YYYY MMMM")
      }
    }
  }
`

export default projecttemplate
