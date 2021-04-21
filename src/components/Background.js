import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BgImage } from "gbimage-bridge"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

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

  const combinedBgImages = [
    `linear-gradient(
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 147, 150, 1) 35%,
    rgba(117, 144, 141, 1) 100%)`,
    image,
  ].reverse()

  return (
    <div style={{ display: "inline-block", padding: "20px 5px" }}>
      <BgImage image={image}>{children}</BgImage>
    </div>
  )
}

export default StyledBackgroundSection
