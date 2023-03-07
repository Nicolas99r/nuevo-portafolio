import React from 'react'
import styled from 'styled-components'
import PText from './PText'

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  p {
    margin: 0;
  }
  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 15rem;
  }
  .item {
    background-color: #2c2e33;
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }
  }
`

export default function AboutInfoItem({
  title = 'this is title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
        <h1 className='title'>{title}</h1>
        <div className="items">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <PText>{item}</PText>
            </div>
          ))}
        </div>
    </AboutItemStyles>
  )
}
