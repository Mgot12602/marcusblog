import React from "react"
import styled from "styled-components"
import Links from "../constants/links"
import { FaBars } from "react-icons/fa"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { IconContext } from "react-icons"

const Nav = ({ toggle }) => {
  const {
    imageFile: {
      childImageSharp: { image },
    },
  } = useStaticQuery(graphql`
    {
      imageFile: file(name: { eq: "logo2" }) {
        childImageSharp {
          image: gatsbyImageData(width: 200)
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Link to="/">
        <GatsbyImage image={image} alt="logo image" className="logo" />
      </Link>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <button className="toggle-btn" onClick={toggle}>
          <FaBars />
        </button>
      </IconContext.Provider>
      <Links display="none" className="links" styleClass="nav-links" />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  /* background: red; */
  height: 10vh;
  padding: 10px;
  /* width: 100%; */

  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    /* margin-left: 10px; */
  }
  .react-icons {
    height: 40px;
    width: 40px;
  }
  .toggle-btn {
    background-color: var(--secondary-color);
    border: none;
    height: 45px;
    border-radius: 5px;
  }

  @media screen and (min-width: 800px) {
    .toggle-btn {
      display: none;
    }
  }
`

export default Nav
