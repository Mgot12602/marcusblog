import React from "react"

const LinearBackground = ({ children }) => {
  return <div style={linearStyle}>{children}</div>
}

const linearStyle = {
  background:
    "linear-gradient(rgba(2, 0, 36, 1) 0%,rgba(25, 147, 150, 1) 35%,rgba(117, 144, 141, 1) 100%)",
}

export default LinearBackground
