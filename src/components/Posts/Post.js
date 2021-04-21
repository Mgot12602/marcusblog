import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Post = post => {
  console.log("post in post component", post)
  const {
    childMdx: {
      frontmatter: {
        title,
        date,
        slug,
        excerpt,
        category,
        image: {
          childImageSharp: { gatsbyImageData: image },
        },
      },
    },
  } = post
  return (
    <Wrapper>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <div className="columns">
        <div className="image-container">
          <GatsbyImage image={image} alt={title} />
        </div>
        <div className="text-container">
          <h2>
            {`Category: `}
            <span>
              <Link to={`/post-categories/${category}`}>{category}</Link>
            </span>
          </h2>
          <h3>
            {excerpt}
            <Link to={`/blog/${slug}`}>
              <span>Read more...</span>
            </Link>
          </h3>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h2 {
    color: purple;
  }
  .columns {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    width: 100%;
    height: 300px;
  }

  span {
    color: green;
    background-color: gray;
  }

  .image-container {
    border: 1px solid black;
    width: 40%;
    margin: 5px 0;
  }

  .text-container {
    margin: 5px;
    width: 40%;
  }
`

export default Post
