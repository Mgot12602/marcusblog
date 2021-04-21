import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import {
  GlobalStyleReset,
  GlobalStyleFonts,
  CSSVariables,
} from "../styles/globalStyles"

import styled from "styled-components"

import LinearBacgkround from "../components/LinearBackground"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
    console.log("isOpen", isOpen)
  }
  return (
    <div>
      {/* <StyledBackgroundSection> */}
      <LinearBacgkround>
        <GlobalStyleReset />
        <GlobalStyleFonts />
        <CSSVariables />
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <MainContainer>{children}</MainContainer>
        <Footer />
      </LinearBacgkround>
      {/* </StyledBackgroundSection> */}
    </div>
  )
}

const MainContainer = styled.main`
  padding: 0 30px;
  @media screen and (max-width: 800px) {
    padding: 0 10px;
  }
`

export default Layout
