import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenuStyle = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.001);
    backdrop-filter: blur(8px);
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li {
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover{
                background-color: rgba(41, 37, 44, 0.5);
            }
        }
        a {
            display: inline-block;
            padding: 1rem 2rem;
            font-size: 2rem;
            outline: none;
            color: #DDDDDD;
        }
        .active {
            color: white;
        }
    }
    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 5rem;
        cursor: pointer;
        display: none;
        outline: none;
        * {
            pointer-events: none;
        }
    }
    .closeNavIcon {
        display: none;
    }

    .scrollActive {
        background-color: #181E29;
    }


    @media only screen and (max-width: 768px){
        padding: 0;
        .hide-item {
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon {
            display: block;
            padding: 1rem;
        }
        .navItems {
            --top: 1rem;
            transition: 0.3s ease transform;
            background-color: rgba(41, 37, 44, 1);
            padding: 1rem;
            font-size: 24px;
            width: 98%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 0.5rem;
            top: var(--top);
            .closeNavIcon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                * {
                    pointer-events: none;
                }
            }
            li {
                display: block;
                margin-bottom: 1rem;
    
            }
        }
    }
`;

export default function NavMenu(){
    const [showNav, SetShowNav] = useState(false);
    return(
        <NavMenuStyle>
            <div 
                className='mobile-menu-icon'
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}>
                <MdMenu/>
            </div>
            <ul className={!showNav ? 'navItems hide-item': 'navItems'}>
                <div 
                    className='closeNavIcon'
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}>
                    <MdClose/>
                </div>
                <li>
                    <NavLink to="/"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >Contact</NavLink>
                </li>
            </ul>
        </NavMenuStyle>
    )
}