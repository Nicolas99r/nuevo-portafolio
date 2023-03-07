import { v4 as uuidv4 } from 'uuid';
import tiempoImg from '../Data/img/tiempo.png';
import mathlyImg from '../Data/img/mathly.png';
import portaImg from '../Data/img/portfolio-basic.png';
import bylinchImg from '../Data/img/bylinch.png';
import lalaImg from '../Data/img/lalaland4.png'
import howImg from '../Data/img/panas.jpg'
import pichiImg from '../Data/img/modelado-carro.jpg'
import guitarImg from '../Data/img/modelo-guitarra.png'
import robotImg from '../Data/img/modelado-robotcito.jpg'
import personajeImg from '../Data/img/modelado-personaje.jpg'
import contraImg from '../Data/img/contra.png'
import julyImg from '../Data/img/ijuly.png'
import cajiImg from '../Data/img/cajicarros.png'

const projects = [
  {
    id: uuidv4(),
    name: 'Cajicarros',
    desc:
      'An educational videogame for children aged 7 to 12 to learn about traffic rules.',
    img: cajiImg,
    link: 'https://cajicarros.netlify.app/'
  },
  {
    id: uuidv4(),
    name: "Bylinch",
    desc:
      'An e-commerce website for cosmetic products. Fully responsive.',
    img: bylinchImg,
    link: 'http://bylinch.lovestoblog.com/?i=1',
  },
  {
    id: uuidv4(),
    name: 'La La Land',
    desc:
      'An animation segment from the musical La-la-Land (2016).',
    img: lalaImg,
    link: 'https://youtu.be/_c4Xq-S5TwA',
  },
  {
    id: uuidv4(),
    name: 'Renault 4',
    desc:
      '3D model of a Reanult 4',
    img: pichiImg,
  },
  {
    id: uuidv4(),
    name: 'How I Met los Panas',
    desc:
      'An intro recreation of "How I met yout mother"',
    img: howImg,
    link: 'https://www.youtube.com/watch?v=6oFipWZ-mos',
  },
  {
    id: uuidv4(),
    name: 'Blind-Buter-Robot',
    desc:
      '3D model of Butter robot from "Rick and Morty" but blind',
    img: robotImg,
  },
  {
    id: uuidv4(),
    name: 'Guitar 3D Model',
    desc:
      'An electric guitar 3D model. Exploded version.',
    img: guitarImg,
  },
  {
    id: uuidv4(),
    name: 'Wacky races 3D model',
    desc:
      '3D model of a "Wacky Races" character with its car',
    img: personajeImg,
  },
  {
    id: uuidv4(),
    name: 'Contra el Tiempo',
    desc:
      'Music animated video from the band "Lado B"',
    img: contraImg,
    link: 'https://youtu.be/XjT4XK8ihCg',
  },
  {
    id: uuidv4(),
    name: 'iJuly',
    desc:
      'A parody to iCarly TV show',
    img: julyImg,
    link: 'https://youtu.be/A9pfN9q1ae4',
  },
  {
    id: uuidv4(),
    name: 'Mathly',
    desc:
      'A Calculator App prototype, based in Mathlab and Mapple calculator.',
    img: mathlyImg,
    link: 'https://www.canva.com/design/DAFBqfilByA/IScazU3jvm3RQCeYn9PWvQ/view?utm_content=DAFBqfilByA&utm_campaign=designshare&utm_medium=link&utm_source=publishpresent'
  },
  {
    id: uuidv4(),
    name: 'Portfolio HTML/CSS',
    desc:
      'My original Portfolio, created only with HTML and CSS',
    img: portaImg,
  },
  {
    id: uuidv4(),
    name: 'Timer',
    desc:
      'A simple App that shows how many time has passed since I created it.',
    img: tiempoImg,
    link: 'https://codepen.io/Nickr/pen/abpwXBa',
  },
];

export default projects;