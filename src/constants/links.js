import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./links.css"
const Links = ({ styleClass }) => {
  console.log("props.display", styleClass)
  return (
    <ul className={styleClass}>
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
  )
}

export default Links
