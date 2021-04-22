import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaRegCalendarAlt } from "react-icons/fa"

const Project = project => {
  console.log(project)
  const {
    title,
    date,
    slug,
    excerpt,
    tag: tags,
    image: {
      childImageSharp: { gatsbyImageData: image },
    },
  } = project
  console.log("tags", tags)
  return (
    <Wrapper>
      <div className="columns">
        <div>
          <h2>{title}</h2>

          <div className="image-container">
            <Link to={`/projects/${slug}`}>
              {" "}
              <GatsbyImage image={image} alt={title} className="imgStyle" />
            </Link>
          </div>
        </div>

        <div className="text-container">
          <h3>
            <FaRegCalendarAlt />
            {` ${date}`}
          </h3>
          <p className="excerpt">
            {excerpt}{" "}
            <span>
              <Link to={`/projects/${slug}`}>Read more...</Link>
            </span>
          </p>
          <p className="categories">
            {tags.map(tag => {
              return (
                <span className="tags" key={tag.id}>{` ${tag.name} `}</span>
              )
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  box-shadow: inset 80px 50px 80px 50px rgba(0, 0, 0, 0.3),
    0 6px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 20px auto;
  background-color: var(--secondary-color);
  width: 80%;
  padding: 20px 0;
  border-radius: 3px;
  @media screen and (max-width: 800px) {
    width: 100%;
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
      font-size: 0.7em;
    }
  }
  h2 {
    /* padding-left: 30px; */
    text-transform: uppercase;
    /* border: 1px solid black; */
    text-align: center;
    /* background-color: blue; */
    /* background-size: 100% 0.2em; */
    margin-bottom: 5px;
    font-family: "PROGRESS PERSONAL USE";
    @media screen and (max-width: 800px) {
      font-size: 1.5em;
      padding-left: 5px;
    }
  }
  .columns {
    display: grid;
    grid-template-columns: 50% 50%;
    /* grid-gap: 20px; */
    /* border: 1px solid black; */
    width: 100%;
    /* height: 300px; */
  }
  h3 {
    text-align: right;
    padding-left: 10px;
    margin-bottom: 10px;
    font-size: 1.3em;
    /* border-top: 5px solid rgba(25, 147, 150, 0.5); */
    /* background-color: rgba(25, 147, 150, 0.1); */
    @media screen and (max-width: 800px) {
      font-size: 1em;
    }
  }
  span {
    color: green;
  }

  .imgStyle {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.29);
  }

  .image-container {
    /* width: 40%; */

    display: flex;
    justify-content: center;
    /* border: 1px solid black; */
    align-self: center;
  }

  .img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .text-container {
    /* border: 1px solid black; */
    margin: 5px 30px;
    padding-left: 10px;
    @media screen and (max-width: 800px) {
      margin: 5px 5px;
    }
  }
  a {
    display: block;
    font-size: 1.2em;
  }
  .excerpt {
    background-color: rgba(25, 147, 150, 0.1);
    font-size: 1.5em;
    border-left: 5px solid rgba(25, 147, 150, 0.5);
    padding-left: 10px;
    @media screen and (max-width: 800px) {
      font-size: 1em;
    }
  }
`

export default Project
