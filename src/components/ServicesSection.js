import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'
import {MdMovieFilter, MdCreate, MdDevices} from 'react-icons/md'

import motionImg from '../assets/motion.jpg'
import dImg from '../assets/3d.jpg'

const ServicesItemsStyles = styled.div`
    padding: 10rem 0;
    .services__allItems {
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }

    @media only screen and (max-width: 768px) {
        .services__allItems {
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
        }
    }
`

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
        <div className='container'>
            <SectionTitle 
                heading='Services'
                subheading='What I will do for you'
            />
            <div className='services__allItems'>
                <ServicesSectionItem
                    icon={<MdDevices/>}
                    title="Web Dev / Web Design"
                    descp='I will design and develop your ideas to create the perfect website for you.'
                />
                <ServicesSectionItem
                    icon={<MdMovieFilter/>}
                    title="Motion Design"
                    descp='I will create, edit, and add cool FX to your videos to improve your ideas.'
                    img={motionImg}
                />
                <ServicesSectionItem
                    icon={<MdCreate/>}
                    title="3D Projects"
                    descp='Creation of 3D models and animations to get into your videogames, apps or websites'
                    img={dImg}
                />
            </div>
        </div>
    </ServicesItemsStyles>
  )
}
