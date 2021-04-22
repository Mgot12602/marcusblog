import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

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
            readTime,
            image: {
              childImageSharp: { gatsbyImageData: image },
            },
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
            <div className="date-read-auth">
              <div className="date-readTime">
                <h3>{date}</h3>
                <p>{readTime} min read</p>
              </div>
              <p>
                <span className="author">Author:</span> {author}
              </p>
            </div>
          </div>
          <div className="image-container">
            <GatsbyImage
              image={image}
              alt={title}
              style={{ margin: "20px auto" }}
            />
          </div>
          <div className="mdx-render">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </article>
        <div className="back-btn-container">
          <button className="back-btn">
            <Link to="/tips">Back to All Tips</Link>
          </button>
        </div>
      </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
  margin: 40px;

  @media screen and (max-width: 800px) {
    margin: 10px;
  }
  .date-read-auth {
    margin: 20px 0px;
  }

  .author {
    font-weight: bold;
  }
  .date-readTime {
    display: flex;
    margin-bottom: 5px;
  }

  .date-readTime h3 {
    margin-right: 50px;
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

  article {
    margin-bottom: 70px;
    @media screen and (max-width: 800px) {
      font-size: 0.7em;
    }
  }
  .image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  h1 {
    font-family: "PROGRESS PERSONAL USE";
  }
  .header {
    margin: 70px 20px 10px 20px;
    color: var(--third-color-text);
  }
  .header h3 {
    /* color: var(--third-color-text); */
  }

  .mdx-render {
    margin: 20px 30px;
    @media screen and (max-width: 800px) {
      margin: 20px 0;
    }
  }

  .mdx-render p {
    line-height: 35px;
    margin-bottom: 30px;
    margin-top: 20px;
  }
  .mdx-render h2 {
    margin-top: 10px;
    margin-bottom: 25px;
  }

  .mdx-render pre {
    margin: 30px;
    padding: 5px;
    font-size: 1.4em;
    line-height: 1.3em;
  }
`
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
          readTime
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
