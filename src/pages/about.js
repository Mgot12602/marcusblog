import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
  {
    about: aboutJson {
      info {
        contact
        description
        description2
        languages
      }
      subtitle
      title
    }
    imageFile: file(name: { eq: "marc" }) {
      childImageSharp {
        image: gatsbyImageData(width: 400)
      }
    }
  }
`

const about = ({ data }) => {
  console.log("about data", data)
  const {
    imageFile: {
      childImageSharp: { image },
    },
    about: {
      title,
      subtitle,
      info: { contact, description, description2, languages },
    },
  } = data
  return (
    <Layout>
      <section>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <article>
          <div>
            <GatsbyImage image={image} alt={title} />
          </div>
          <div>
            <p>{description}</p>
            <p>{description2}</p>
            <h3>Contact me: {contact}</h3>
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default about
