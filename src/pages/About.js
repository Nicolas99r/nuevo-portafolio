import React from "react";
import PText from "../components/PText";
import Button from "../components/Button";
import aboutImg from "../assets/yo2.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 8rem 0 10rem 0;
  .top__section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: rgba(0, 0, 0, 0.3);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    margin-right: 1rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 3px solid #55575a;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top__section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top__section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Nicolás Reyes</span>
            </p>
            <h2 className="about__heading">Multimedia Engineer</h2>
            <div className="about__info">
              <PText>
              I specialize in creating dynamic, visually engaging web experiences that merge form and function. With expertise in front-end development, I leverage technologies like React, TypeScript, and Astro to build responsive, intuitive applications tailored to user needs.
              <br/><br/>
              My background in multimedia fuels my commitment to a seamless user experience, combining my design sensibilities with solid technical skills. From API integrations to UX/UI enhancements, I thrive in fast-paced, collaborative settings, always aiming to make a tangible impact through innovative, efficient code.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#">
              <a href="../assets/Nicolas Reyes CV.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
          <div className="right">
            <img src={aboutImg} alt="Nicolas photography" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Education</h1>
            <AboutInfoItem
              title="College"
              items={[
                "Multimedia Engineering at 'Universidad Militar Nueva granada'",
              ]}
            />
            <AboutInfoItem
              title="Other"
              items={[
                'Javascript School at Platzi',
                'Frontend (UX) at Colsubsidio',
                'React - The Complete Guide 2024 at Udemy'
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My skills</h1>
            <AboutInfoItem
              title="Languages"
              items={["Javascript", "Typescript", "SQL"]}
            />
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "React", "Tailwind", "Three JS", "Astro", "React Native"]}
            />
            <AboutInfoItem title="BackEnd" items={["Node JS", "Nest JS", "Mongo DB"]} />
            <AboutInfoItem
              title="Design"
              items={[
                "UI/UX Design",
                "Adobe Suite",
                "Figma",
                "Canva"
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Experience</h1>
            <AboutInfoItem
              title="2024 - Cur."
              items={["Fullstack Developer at FitLegends (Personal Project)"]}
            />
            <AboutInfoItem
              title="2023 - Cur."
              items={["eLearning Developer at egroup Colombia"]}
            />
            <AboutInfoItem title="∞" items={["Always learning"]} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
