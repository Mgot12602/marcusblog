import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { BgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const GbiBridged = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(name: { eq: "dust-background" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  const combinedBgImages = [
    image,
    `-webkit-linear-gradient(
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 147, 150, 1) 35%,
    rgba(117, 144, 141, 1) 100%`,
  ].reverse()

  // Use like this:
  //   const bgImage = convertToBgImage(image)

  return <BgImage image={combinedBgImages}>{children}</BgImage>
}
const StyledBackgroundSection = styled(GbiBridged)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  opacity: 1 !important;
  background-size: cover;
  /* background-color: blue; */
  /* opacity: 0.1; */
  background: linear-gradient(
    rgba(2, 0, 36, 1) 0%,
    rgba(25, 147, 150, 1) 35%,
    rgba(117, 144, 141, 1) 100%
  );
`

export default StyledBackgroundSection
