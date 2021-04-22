import React from "react"
import { FaGithub } from "react-icons/fa"

const socialLinks = ({ style }) => {
  return (
    <div>
      <a href="https://github.com/Mgot12602">
        <FaGithub style={style} />
      </a>
    </div>
  )
}

export default socialLinks
