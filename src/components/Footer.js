import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'
import PText from './PText'

const FooterStyles = styled.div`
    padding-top: 5rem;
    background-color: #2c2e33;
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2, .footer__col3 {
        flex: 1;
    }
    .footer__col1__title {
        margin: 0;
        font-size: 3.5rem;
        margin-bottom: 1rem;
        .para {
        max-width: 100%;
        }
    }
    .copyright {
        background-color: #242424;
        margin-top: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0;
            & > div {
                margin-top: 2rem;
            }
        }
    }
`

export default function Footer() {
  return (
    <FooterStyles>
        <div className='container'>
            <div className='footer__col1'>
                <h1 className='footer__col1__title'>Nicolás Reyes</h1>
                <PText>"No one knows what the outcome will be. So, choose whatever you'll regret the least."</PText>
                <PText>- Levi Ackerman -</PText>
            </div>
            <div className='footer__col2'>
                <FooterCol 
                    heading='Important Links'
                    links={[
                        {
                            title: 'Home',
                            path: '/',
                            type: 'link'
                        },
                        {
                            title: 'About',
                            path: '/About',
                            type: 'link'
                        },
                        {
                            title: 'Projects',
                            path: '/projects',
                            type: 'link'
                        },
                        {
                            title: 'Contact',
                            path: '/contact',
                            type: 'link'
                        },
                    ]}
                />
            </div>
            <div className='footer__col3'>
                <FooterCol 
                    heading='Social Links'
                    links={[
                        {
                            title: 'Instagram',
                            path: 'https://www.instagram.com/nicolas99r',
                        },
                        {
                            title: 'LinkedIn',
                            path: 'https://www.linkedin.com/in/nico-reyes',
                        },
                        {
                            title: 'Github',
                            path: 'https://www.github.com/nicolas99r',
                        },
                    ]}
                />
            </div>
        </div>
        <div className='copyright'>
            <div className='container'>
                <PText className='copy__text'>© 2022 - Nicolas Reyes | Ing Multimedia</PText>
            </div>
        </div>
    </FooterStyles>
  )
}
