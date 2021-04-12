import React from "react"
import Project from "./Project"
import styled from "styled-components"

const Projects = ({ title, projects }) => {
  console.log(projects)
  return (
    <section>
      <Title>{title}</Title>
      <div>
        <article>
          {projects.map(project => {
            return <Project key={project.id} {...project} />
          })}
        </article>
      </div>
    </section>
  )
}

const Title = styled.h1`
  text-align: center;
`

export default Projects
