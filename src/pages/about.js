import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { IoMdArrowDropright } from "react-icons/io"
import ContactForm from "../components/ContactForm"

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
        image: gatsbyImageData(width: 200)
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
      <Wrapper>
        <div className="header">
          <h1>{title}</h1>
        </div>
        <article className="about-container">
          <div className="pic-info">
            <div>
              <GatsbyImage
                image={image}
                alt={title}
                style={{ "border-radius": "50%" }}
              />
            </div>
            <div>
              <h2>{subtitle}</h2>
              <p>
                <IoMdArrowDropright />
                {description}
              </p>
              <p>
                {" "}
                <IoMdArrowDropright />
                {description2}
              </p>
            </div>
          </div>
        </article>
        <div className="contact">
          <h3>Contact me</h3>
          <div style={{ width: "400px" }}>
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  .contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 40px;
    align-items: center;
  }
  .contact h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2.3em;
    font-weight: bold;
    font-family: "Ayus";
  }
  .about-container {
    margin: 30px;
  }
  .pic-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    text-align: center;
    font-family: "PROGRESS PERSONAL USE";
  }

  h2 {
    font-family: "Ayus";
  }
  p {
    line-height: 1.5em;
    margin: 15px;
  }
  .header {
    margin: 70px 20px 10px 20px;
    color: var(--third-color-text);
  }
`

export default about
