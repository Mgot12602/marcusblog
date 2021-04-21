import React from "react"
import Tip from "./Tip"
import styled from "styled-components"

const Tips = ({ title, tips }) => {
  console.log("tips component")
  console.log("tips")
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        <article>
          {tips.map(tip => {
            return <Tip key={tip.id} {...tip} />
          })}
        </article>
      </div>
    </Wrapper>
  )
}

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 2.5em;
`

const Wrapper = styled.section`
  /* height: 450px; */
  margin-top: 30px;
  padding-top: 20px;

  background-color: var(--primary-color);
`

export default Tips
