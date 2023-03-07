import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ButtonStyle = styled.div`
    margin-top: 2rem;
    .button {
        font-size: 2.2rem;
        background-color: ${(props) => 
            props.outline ? 'transparent' : 'white'
        };
        padding: 0.5em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid #D8E9F0;
        color: ${(props) => 
            props.outline ? 'white' : '#33425B'
        };
    }




    .hvr-bounce-to-right {
        display: inline-block;
        vertical-align: middle;
        border-radius: 8px;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
      }
      .hvr-bounce-to-right:before {
        content: "";
        position: absolute;
        border-radius: 8px;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => 
            props.outline ? '#D8E9F0' : '#33425B'
        };
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.5s;
        transition-duration: 0.5s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
      }
      .hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {
        color: ${(props) => 
            props.outline ? '#33425B' : 'white'
        };
        border-radius: 8px;
      }
      .hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {
        -webkit-transform: scaleX(1);
        border-radius: 8px;
        transform: scaleX(1);
        -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
        transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
      }




    @media only screen and (max-width: 768px) {
        .button {
            font-size: 1.8rem;
        }
    }
`

export default function Button({
    btnLink = "test", 
    btnText = "test", 
    outline = false}) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
        <Link 
            className='button hvr-bounce-to-right' 
            to={btnLink}>
            {btnText}
        </Link>
    </ButtonStyle>
  )
}
