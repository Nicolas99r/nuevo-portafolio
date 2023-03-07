import React from 'react'
import {MdDesktopMac} from 'react-icons/md'
import styled from 'styled-components'
import PText from './PText'
import serviceImg from '../assets/webdev.jpg'

const ItemStyles = styled.div`
    text-align: center;
    .servicesItem__icon {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        svg {
            width: 3rem;
        }
    }
    .servicesItem__title {
        font-size: 2.5rem;
        font-weight: bold;
    }
    .para {
        margin-top: 2rem;
    }
    .servicesItem__img {
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 12px;
        border: 3px solid #55575a;
        margin-top: 2rem;
        /* filter: grayscale(100%) */
    }
`

export default function ServicesSectionItem({
    icon = <MdDesktopMac/>,
    title = "Web Design",
    descp = "¡Hola! Mi nombre es Frailejón Ernesto Pérez Te quiero saludar No me conoces Pero yo a ti sí sí Yo soy tu amigo, tu amigo Frailejón Ernesto Pérez Te quiero saludar Soy una planta Sin mucho color Cuidar el agua es mi profesión Yo soy tu amigo Tu amigo Frailejón Ernesto Pérez",
    img = serviceImg,
}) {
  return (
    <ItemStyles>
        <div className='servicesItem__icon'>
            {icon}
            <div className='servicesItem__title'>{title}</div>
            <PText>{descp}</PText>
            <div className='servicesItem__img'>
                <img src={img} alt='project pic'/>
            </div>
        </div>
    </ItemStyles>
  )
}
