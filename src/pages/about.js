import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { IoMdArrowDropright } from "react-icons/io"
import ContactForm from "../components/ContactForm"
import Seo from "../components/Seo"

export const query = graphql`
  {
    about: aboutJson {
      info {
        description
        description2
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
  const {
    imageFile: {
      childImageSharp: { image },
    },
    about: {
      title,
      subtitle,
      info: { description, description2 },
    },
  } = data
  return (
    <>
      <Seo title="About" description="subtitle" article={description} />
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
            <div style={{ "max-width": "400px", width: "100%" }}>
              <ContactForm />
            </div>
          </div>
        </Wrapper>
      </Layout>
    </>
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
    font-size: 1.6em;
    font-weight: bold;
    font-family: "Disgracefull Demo", "Rubik";
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
    font-family: "PROGRESS PERSONAL USE", "Rubik";
  }

  h2 {
    font-family: "Disgracefull Demo", "Rubik";
    font-size: 1.6em;
  }
  p {
    line-height: 1.5em;
    margin: 15px;
  }
  .header {
    margin: 70px 20px 60px 20px;
    color: var(--third-color-text);
  }
`

export default about
