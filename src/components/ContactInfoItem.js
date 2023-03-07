import React from 'react'
import PText from './PText'
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components'

const ItemStyles = styled.div`
    padding: 2rem;
    background-color: #242424;
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
        color: #fff;
        background-color: #2c2e33;
        padding: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg {
        width: 3.5rem;
    }
`

export default function ContactInfoItem({
    icon = <MdPlace/>,
    text = 'This is a text hehe',
}) {
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
                <PText>{text}</PText>
            </div>
        </ItemStyles>
    )
}
