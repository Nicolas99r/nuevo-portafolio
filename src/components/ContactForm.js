import React, { useState } from "react";
import styled from "styled-components";

const SuccessStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    #status {
        padding: 1rem;
        width: 90%;
        text-align: center;
        font-size: 2rem;
        margin-top: 2rem;
        border-radius: 12px;
    }
    .success {
        background-color: rgba(0,255,100,0.5);
        animation: status 4s ease forwards;
    }
    .error {
        background-color: rgba(255,100,0,0.5);
        animation: status 4s ease forwards;
    }

    @keyframes status {
        0% {
            opacity: 1;
            pointer-events: all;
        }
        90% {
            opacity: 1;
            pointer-events: all;
        }
        100% {
            opacity: 0;
            pointer-events: none;
        }
    }
`

const FormStyles = styled.form`
    width: 100%;
    .form-group {
        width:100%;
        margin-bottom: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input, textarea {
        width: 100%;
        font-size: 1.5rem;
        padding: 1.2rem;
        color: #fff;
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
        background-color: #242424;
    }
    textarea {
        min-height: 250px;
        resize: none;
    }
    button[type='submit'] {
        background-color: #D8E9F0;
        color: #242424;
        font-size: 2rem;
        display: inline-block;
        outline: none;
        border: none;
        padding: 1rem 4rem;
        border-radius: 8px;
        cursor: pointer;
        border: 2px solid #242424;
        transition: all 0.3s ease;
    }
    button[type='submit']:hover {
        background-color: rgba(0,0,0,0.5);
        color: #fff;
        border: 2px solid #D8E9F0;
    }
`

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
        <FormStyles action="https://formspree.io/f/xlezkvyn" method="POST" id="my-form">
            <div className="form-group">
                <label htmlFor="name">
                    Your name
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="email">
                    Your email
                    <input
                        type="text"
                        id="email"
                        email="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-group">
                <label htmlFor="message">
                    Your message
                    <textarea
                        type="text"
                        id="message"
                        message="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <button type="submit">Send</button>
        </FormStyles>
        <SuccessStyles>
            <div id="status" className=""></div>
        </SuccessStyles>
    </div>
  );
}
