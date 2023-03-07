import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ContactInfoItem from '../components/ContactInfoItem'
import ContactForm from '../components/ContactForm'
import { MdLocalPhone, MdEmail } from 'react-icons/md'

const ContactSectionStyles = styled.div`
    padding: 8rem 0;
    .contactSection__wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 4rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: #D8E9F0;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left, .right {
        width: 100%;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        .contactSection__wrapper {
            flex-direction: column;
        }
        .contactSection__wrapper::after {
            display: none;
        }
        .left, .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`

export default function ContactSection() {
    return (
    <ContactSectionStyles>
        <div className="container">
        <SectionTitle
            heading="Contact me"
            subheading="If i you liked my work, no doubt and"
        />
        <div className="contactSection__wrapper">
            <div className="left">
                <ContactInfoItem
                    icon={<MdLocalPhone/>}
                    text='(+57) Wowow chill...'
                />
                <ContactInfoItem
                    icon={<MdEmail/>}
                    text="Send me an email ;)"
                />
                <ContactInfoItem
                    text='Bogotá DC, Colombia'
                />
            </div>
            <div className="right">
                <ContactForm/>
            </div>
        </div>
        </div>
    </ContactSectionStyles>
    );
}
