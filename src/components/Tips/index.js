import React from "react"
import Tip from "./Tip"
import styled from "styled-components"

const Tips = ({ title, tips }) => {
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

const Wrapper = styled.section`
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
  font-family: "Disgracefull Demo", "Rubik";
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.5);
  /* margin: 0 auto; */
  text-align: center;
  font-weight: 500;
  font-size: 2.5em;
  background-color: var(--primary-color);
  @media screen and (max-width: 800px) {
    font-size: 1.5em;
  }
`
export default Tips
