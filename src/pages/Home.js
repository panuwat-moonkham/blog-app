import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../assets/background.jpg'
import BackgroundBlock from '../components/BackgroundBlock'
import { Title, Subtitle } from '../components/Typography'

const arr = new Array(250).fill('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum maximus eros,')

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: transparent;
  border: #fff solid 1px;
  border-radius: 8px;
  color: #fff;
  margin: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: #000;
  }

`

const Content = styled.div`
  padding: 8rem;
`

function Home() {
  return (
    <>
      <BackgroundBlock src={backgroundImage}>
        <Title>Travel With Us</Title>
        <Subtitle>Lorem ipsum dolor sit amet</Subtitle>
        <Button as="a" href="#content">
          Look Around
        </Button>
      </BackgroundBlock>
      <Content id="content">
        {arr.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </Content>
    </>
  )
}

export default Home
