import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"

const Project = project => {
  console.log(project)
  const {
    title,
    date,
    slug,
    excerpt,
    image: {
      childImageSharp: { gatsbyImageData: image },
    },
  } = project
  return (
    <Wrapper>
      <h2>{title}</h2>
      <h3>{date}</h3>
      <div className="columns">
        <div className="image-container">
          <GatsbyImage image={image} alt={title} />
        </div>
        <div className="text-container">
          <h3>
            {excerpt}
            <Link to={`/projects/${slug}`}>
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

export default Project
