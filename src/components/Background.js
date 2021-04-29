import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { BgImage } from "gbimage-bridge"

const StyledBackgroundSection = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(name: { eq: "dust-background2" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  return (
    <div style={{ display: "inline-block", padding: "20px 5px" }}>
      <BgImage image={image}>{children}</BgImage>
    </div>
  )
}

export default StyledBackgroundSection
