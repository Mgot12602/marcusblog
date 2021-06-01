import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/Seo"
import styled from "styled-components"

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
            readTime,
            excerpt,
            image: {
              childImageSharp: { gatsbyImageData: image },
            },
          },
        },
      ],
    },
  } = data

  return (
    <>
      <Seo title={title} description={excerpt} img={image} article={body} />
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
              <Link to="/blog">Back to All Posts</Link>
            </button>
          </div>
        </Wrapper>
      </Layout>
    </>
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

  .mdx-render p,
  li {
    line-height: 35px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .mdx-render h2 {
    margin-top: 40px;
    margin-bottom: 15px;
  }

  .mdx-render pre {
    margin: 20px 20px 40px;
    padding: 5px;
    font-size: 1.2em;
    line-height: 1.3em;
  }
`

export const query = graphql`
  query GetSinglePost($slug: String) {
    post: allMdx(filter: { frontmatter: { slug: { eq: $slug } } }) {
      nodes {
        frontmatter {
          title
          author
          category
          slug
          excerpt
          readTime
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
