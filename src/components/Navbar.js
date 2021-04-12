import React from "react"
import styled from "styled-components"
import Links from "../constants/links"

const nav = () => {
  return (
    <Wrapper>
      <nav>
        <Links />
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  /* background: red; */
  height: 10vh;
  a {
    color: white;
  }
`

export default nav
