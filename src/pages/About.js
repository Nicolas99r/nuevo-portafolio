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
              I am a tenth-semester student of Multimedia Engineering with experience in web development, design, image processing, programming, animation, render, modeling, and many other related areas. My goal has always been to learn as much as I can and bring my ideas to life, contributing to the development of a better world for everyone.
              <br />
              <br />
              Apart from my work, I enjoy spending my free time watching movies and series, playing the guitar with my band, and hanging out with friends and family.
              </PText>
            </div>
            <Button btnText="Download CV" btnLink="#"></Button>
          </div>
          <div className="right">
            <img src={aboutImg} alt="Nicolas photography" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">My Education</h1>
            <AboutInfoItem
              title="School"
              items={[
                'Technical bachelor degree at "Augusto E. Medina" of Comfenalco Educational Institute',
              ]}
            />
            <AboutInfoItem
              title="College"
              items={[
                "Multimedia Engineering at Militar University of New Granada",
              ]}
            />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My skills</h1>
            <AboutInfoItem
              title="Languages"
              items={["Javascript", "C# (Unity)"]}
            />
            <AboutInfoItem
              title="FrontEnd"
              items={["HTML", "CSS", "Javascript", "ReactJS"]}
            />
            <AboutInfoItem title="BackEnd" items={["MySQL", "PHP"]} />
            <AboutInfoItem
              title="Design"
              items={[
                "Photoshop",
                "Ilustrator",
                "After Effects",
                "Premiere Pro",
                "Adobe XD",
              ]}
            />
            <AboutInfoItem title="3D" items={["Autodesk Maya"]} />
          </div>
          <div className="about__info__item">
            <h1 className="about__info__heading">My Experience</h1>
            <AboutInfoItem
              title="2019-2020"
              items={["Junior FrontEnd at Ciento3"]}
            />
            <AboutInfoItem
              title="2020-2021"
              items={["Web E-commerce Dev at Bylinch"]}
            />
            <AboutInfoItem title="2021-2022" items={["Educational Videogame 'Cajicarros' Development"]} />
            <AboutInfoItem title="∞" items={["Always learning"]} />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
