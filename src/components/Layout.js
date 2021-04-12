import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { GlobalStyleReset } from "../styles/globalStyles"
import { GlobalStyleFonts } from "../styles/globalStyles"
import styled from "styled-components"
import StyledBackgroundSection from "../components/Background"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyleReset />
      <GlobalStyleFonts />
      <Navbar />
      <MainContainer>{children}</MainContainer>
      <Footer />
      {/* </StyledBackgroundSection> */}
    </div>
  )
}

const MainContainer = styled.main`
  box-sizing: border-box;
  margin: 0 30px;
`

export default Layout
