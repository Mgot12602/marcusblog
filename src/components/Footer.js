import React from "react"
import SocialLinks from "../constants/socialLinks"
import styled from "styled-components"

const Footer = () => {
  return (
    <StyledFooter>
      <div className="github">
        <p>Check out my Github repo{`  `}</p>
        <SocialLinks style={styledIcon} />
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Marcus Blog made by Marc Gotzens. All
        rights reserved
      </p>
    </StyledFooter>
  )
}

const styledIcon = {
  width: "50px",
  height: "50px",
  color: "var(--third-color)",
}

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: rgba(2, 0, 36, 1);
  min-height: 100px;
  color: rgba(117, 144, 141, 1);
  box-shadow: inset 0 40px 60px 10px rgba(25, 147, 150, 0.1);

  .copyright {
    width: 100%;
    align-self: flex-end;
    text-align: center;
    margin-bottom: 10px;
  }
  h2 {
    display: inline-block;
  }

  .github {
    display: flex;
    padding: 30px;
    justify-content: center;
  }

  .github p {
    margin: 10px;
  }
  .giticon {
    margin: 10px;
    width: 100px;
  }
`

export default Footer
