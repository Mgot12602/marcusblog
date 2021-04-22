import React from "react"
import Project from "./Project"
import styled from "styled-components"
import StyledBackgroundSection from "../../components/Background"

const Projects = ({ title, projects }) => {
  console.log(projects)
  return (
    <Wrapper>
      <StyledBackgroundSection>
        <Title>{title}</Title>
        <div>
          {projects.map(project => {
            return <Project key={project.id} {...project} />
          })}
        </div>
      </StyledBackgroundSection>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* height: 450px; */
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color: rgba(25, 147, 150, 0.2); */
  @media screen and (max-width: 800px) {
    margin-top: 10px;
  }
`

const Title = styled.h1`
  display: inline;
  margin: 0 15px;
  padding: 0 18px 0 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  /* margin: 0 auto; */
  font-family: "Ayus";
  text-align: center;
  font-weight: 500;
  font-size: 2.5em;
  background-color: var(--primary-color);
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`

export default Projects
