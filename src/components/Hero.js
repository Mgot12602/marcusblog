import React from "react"
import styled from "styled-components"

const Hero = () => {
  return (
    <Wrapper>
      <h1>MARCUS WEB DEV</h1>
      <h2>
        Enthusiast of the world of React sharing my projects, articles and tips
      </h2>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  height: 60vh;
  h1 {
    margin-left: 30px;
    margin-top: 30px;
    font-family: "PROGRESS PERSONAL USE", Verdana, "Times New Roman";
    font-size: 72px;
    font-weight: initial;
  }
  h2 {
    margin-left: 50px;
    margin-top: 20px;
    width: 40%;
    font-family: "Disgracefull Demo", "Ayus";
    font-size: 40px;
    font-weight: lighter;
  }
`
