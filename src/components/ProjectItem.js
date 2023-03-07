import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import projectImg from '../assets/nick5.jpg'

const ProjectItemStyles = styled.div`
    .projectItem__img {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid #55575a;
        img {
            height: 100%;
            /* filter: grayscale(100%) brightness(0.8); */
            transition: all 0.3s ease;
            cursor: pointer;
        }
        img:hover {
            /* filter: grayscale(0%); */
            transform: scale(1.1);
        }
    }
    .projectItem__info {
        margin-top: 1rem;
        background-color: #2c2e33;
        padding: 1rem;
        border-radius: 12px;
    }
    .projectItem__title {
        padding: 0;
        margin: 0;
        font-size: 2.2rem;
    }
    .projectItem__desc {
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        margin-top: 1rem;
    }
    .projectButton {
        display: flex;
        justify-content: center;
        padding: 1rem 2rem;
        margin-top: 1rem;
        font-size: 1.8rem;
        width: 100%;
        border-radius: 12px;
        background-color: #FFFFFF;
        color: #000;
        font-weight: 400;
        border: 2px solid #33425B;
        transition: all 0.3s ease;
    }
    .projectButton:hover {
        background-color: #33425B;
        color: #FFFFFF;
        border: 2px solid #FFF;
    }

    @media only screen and (max-width: 768px) {
        .projectItem__img {
            height: 350px;
        }
    }
`

export default function ProjectItem({
    img = projectImg,
    title = 'Project Name',
    desc = 'Estaba la pájara pinta a la somobra del verde limón. Con el pico picaba la rama, con la pata recoje la flor.',
    link,
}) {
  return (
    <ProjectItemStyles>
        <Link to="/projects" className='projectItem__img'>
            <img src={img} alt='project pic'/>
        </Link>
        <div className='projectItem__info'>
            <Link to="#">
                <h3 className='projectItem__title'>{title}</h3>
            </Link>
            <p className='projectItem__desc'>{desc}</p>
            {link && (
                <a 
                    href={link}
                    className="projectButton"
                    target="_blank"
                    rel="noreferrer"
                >Open Project</a>
            )}
        </div>
    </ProjectItemStyles>
  )
}
