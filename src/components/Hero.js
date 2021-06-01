import React from "react"
import styled from "styled-components"
import StyledBackgroundSection from "../components/Background"

const Hero = props => {
  return (
    <Wrapper>
      {/* <StyledBackgroundSection> */}
      <h1>MARCUS WEB DEV</h1>
      {/* </StyledBackgroundSection> */}
      <h2>
        Enthusiast of the world of React sharing my projects, articles and tips
      </h2>
      {/* <div className="underline"></div> */}
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.div`
  /* height: 500px; */
  padding-bottom: 120px;
  h1 {
    margin-left: 30px;
    padding-top: 50px;
    display: inline-block;
    font-family: "PROGRESS PERSONAL USE", Verdana, "Times New Roman";
    font-size: 80px;
    font-weight: initial;
    color: var(--third-color-text);
    @media screen and (max-width: 800px) {
      margin-left: 0;
      font-size: 60px;
    }
  }
  h2 {
    margin-left: 50px;
    margin-top: 30px;
    width: 50%;
    font-family: "Disgracefull Demo";
    font-size: 40px;
    font-weight: lighter;
    color: var(--primary-color-text);
    @media screen and (max-width: 800px) {
      width: 100%;
      font-size: 40px;
      margin-left: 0;
    }
  }

  .underline {
    margin-top: 150px;
    border-bottom: 3px solid var(--secondary-color);
    opacity: 0.5;
  }
`
