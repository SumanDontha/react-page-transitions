import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  background: url(${({image}) => image && image }) center;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -60px;
  object-fit: cover;
`

const Container = styled.div`
  color: #fff;
  padding: 0rem 2.5rem;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.4);
  margin: 2rem;
  border-radius: 10px;

  h1 {
    font-size: clamp(1rem, 8vw, 3rem);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: clamp(1rem, 6vw, 1.2rem);
    margin-bottom: 1rem;
  }

  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    padding: 0.8rem 2rem;
    color: #000;
    background: #ffb347;
    // background: linear-gradient(top right, #ffcc33, #ffb347);
    background: linear-gradient(to right, #ffcc33, #ffb347);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    margin-bottom: 2rem;
  }
`

const Hero = ({image, title, desc }) => {
  return (
    <Section image={image}>
      <Container>
        <h1> {title} </h1>
        <p> {desc} </p>
        <button> Learn more </button>
      </Container>
    </Section>
  )
}

export default Hero