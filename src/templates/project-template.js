import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { FaCode } from "react-icons/fa"
import { VscVmRunning } from "react-icons/vsc"

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
          livelink,
          sourcelink,
          image: {
            childImageSharp: { gatsbyImageData: image },
          },
        },
      ],
    },
  } = data

  return (
    <Layout>
      <Wrapper>
        <article>
          <div className="header">
            <h1>{title}</h1>
            <h3>{date}</h3>
          </div>
          <div className="image-container">
            <GatsbyImage
              image={image}
              alt={title}
              style={{ margin: "20px auto" }}
            />
          </div>
          <div className="box-container">
            <div className="source-box box">
              <a href={sourcelink} target="_blank">
                Source Code <FaCode />
              </a>
            </div>

            <div className="live-box box">
              <a href={livelink} target="_blank">
                View it live <VscVmRunning />
              </a>
            </div>
          </div>
          <h3 className="sub-title">About this project</h3>
          <p className="description">{desc}</p>
          <p className="categories">
            {tags.map(tag => (
              <span className="tags">{`${tag.name} `}</span>
            ))}
          </p>
        </article>
        <div className="back-btn-container">
          <button className="back-btn">
            <Link to="/projects">Back to All projects</Link>
          </button>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  margin: 40px;
  /* color: red; */
  @media screen and (max-width: 800px) {
    margin: 10px;
  }
  article {
    margin-bottom: 70px;
    @media screen and (max-width: 800px) {
      font-size: 0.7em;
    }
  }
  .back-btn-container {
    display: flex;
    justify-content: center;
  }
  .back-btn {
    background-color: var(--primary-color);
    border-style: none;
  }

  .back-btn a {
    font-size: 2em;
  }

  .categories {
    margin: 20px;
    display: flex;
    /* width: 100%; */
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  .tags {
    color: black;
    text-transform: capitalize;
    background-color: gray;
    margin: 5px;
    @media screen and (max-width: 800px) {
    }
  }

  h1 {
    font-family: "PROGRESS PERSONAL USE";
    @media screen and (max-width: 800px) {
      /* font-size: 2.5em; */
    }
  }
  .sub-title {
    font-weight: bold;
    margin-bottom: 20px;
    font-family: "Disgracefull Demo", "Ayus";
    font-size: 2em;
    letter-spacing: 3px;
  }
  .description {
    line-height: 35px;
    margin-bottom: 20px;
    font-weight: 350;
    @media screen and (max-width: 800px) {
      line-height: 20px;
    }
  }
  .box-container {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 50px;
  }

  .box {
    margin: 5px;
  }

  .source-box a {
    border: 3px solid var(--third-color);
    padding: 5px;
    margin: 5px;
    display: inline-block;
  }
  .live-box a {
    border: 3px solid var(--third-color);
    padding: 5px;
    margin: 5px;
    display: inline-block;
  }

  .header {
    margin: 70px 20px 10px 20px;
    color: var(--third-color-text);
  }

  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

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
            gatsbyImageData(width: 800)
          }
        }
        date(formatString: "YYYY MMMM")
        livelink
        sourcelink
      }
    }
  }
`

export default projecttemplate
