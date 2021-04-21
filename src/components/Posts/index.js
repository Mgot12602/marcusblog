import React from "react"
import Post from "./Post"
import styled from "styled-components"

const Posts = ({ title, posts }) => {
  console.log(posts)
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>
        <article>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* height: 300px; */
  margin-top: 30px;
  padding-top: 20px;
  margin-top: 50px;
  background-color: var(--primary-color);
`

const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 2.5em;
`

export default Posts
