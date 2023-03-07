import React from 'react'
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
    padding: 10rem 0;
    .contactBanner__wrapper {
        background-color: #2c2e33;
        border-radius: 12px;
        padding: 5rem 0;
        text-align: center;
    }
    .contactBanner__heading {
        font-size: 4rem;
        margin: 0;
        margin-bottom: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .contactBanner__heading {
            font-size: 2.8rem;
        }
    }
`

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
        <div className='container'>
            <div className='contactBanner__wrapper'>
                <PText>Did you like my work?</PText>
                <h3 className='contactBanner__heading'>Let me help you</h3>
                <Button btnText='Contact me' btnLink='/contact'></Button>
            </div>
        </div>
    </ContactBannerStyles>
  )
}
