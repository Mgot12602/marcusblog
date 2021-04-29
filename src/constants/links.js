import React from "react"
import { Link } from "gatsby"

import "./links.css"
const Links = ({ styleClass }) => {
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
