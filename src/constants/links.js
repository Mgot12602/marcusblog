import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const links = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ul {
    display: flex;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
  }
`

export default links
