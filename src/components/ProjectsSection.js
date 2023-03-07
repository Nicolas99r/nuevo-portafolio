import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectItem from './ProjectItem'
import SectionTitle from './SectionTitle'
import projects from '../assets/Data/projects'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper";



const ProjectSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper {
    display: flex;
    justify-content: center;
    align-items: center
  }
  .swiper-container {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #2c2e33;
    z-index: 10;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: gray;
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after, .swiper-button-next::after {
    font-size: 2rem;
  }
  .swiper-pagination {
    
  }
  @media only screen and (max-width: 768px){
    .projects__allItems {
      max-width: 400px;
      margin: 0 auto;
      gap: 5rem
    }
  }
`;

export default function ProjectsSection() {
  // console.log(projects);
  return (
    <ProjectSectionStyle>
      <div className="container">
        <SectionTitle subheading="some of my recent works" heading="Projects" />
        <div className="projects__allItems">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{delay: 5000}}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1200px
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return true;
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    link={project.link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectSectionStyle>
  );
}