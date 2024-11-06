import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import ServicesSectionItem from './ServicesSectionItem'
import {MdDesignServices , MdDevices, MdSettings } from 'react-icons/md'

import design from '../assets/uiux.jpg'
import api from '../assets/api.jpg'

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
                    title="Front-End Development"
                    descp='Modern frameworks like React and Astro to build responsive, interactive web apps.'
                />
                <ServicesSectionItem
                    icon={<MdDesignServices />}
                    title="UX/UI Design"
                    descp='Design focused on accessibility, aesthetics, and seamless navigation.'
                    img={design}
                />
                <ServicesSectionItem
                    icon={<MdSettings />}
                    title="API Integration"
                    descp='Experience integrating APIs to enhance application functionality.'
                    img={api}
                />
            </div>
        </div>
    </ServicesItemsStyles>
  )
}
