import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from '../images/graphics/main-page/playing-cards.webp'
import GraphicsProject1Lightbox from './graphicsproject1'
import GraphicsProject2Lightbox from './graphicsproject2'
import GraphicsProject3Lightbox from './graphicsproject3'
import GraphicsProject4Lightbox from './graphicsproject4'
import project2 from '../images/graphics/main-page/splicers-web.webp'
import project3 from '../images/graphics/main-page/typography.webp'
import project4 from '../images/graphics/main-page/deadlift-gym.webp'
import ReturnTop from './ReturnTop';
import Projectcard from './Projectcard';
function Graphics(){

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".graphics-one"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .5,
                scrollTrigger: {
                    trigger: element.querySelector(".graphics-hero"),
                    start: "-40%",
                    scrub: true,
                    end: "30%",
                    fastScrollEnd: true,
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".graphics-two"),
            {
                opacity: 0,
                y:100
            },
            {
                opacity: 1,
                y:0,
                duration: .5,
                scrollTrigger: {
                    trigger: element.querySelector(".graphics-hero"),
                    start: "50%",
                    scrub: true,
                    end: "100%",
                    fastScrollEnd: true,
                }
            }
        );
    },[]);
    useEffect(()=>{
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('.graphics-three'),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration:.5,
                scrollTrigger:{
                    trigger:element.querySelector('.graphics-one'),
                    start: '-10%',
                    scrub: true,
                    end: '50%',
                    fastScrollEnd: true,
                }
            }
        );
    },[]);
    useEffect(()=>{
        const element = ref.current;
        gsap.fromTo(
            element.querySelector('.graphics-four'),
            {
                opacity: 0,
                y:-100
            },
            {
                opacity: 1,
                y: 0,
                duration:.5,
                scrollTrigger:{
                    trigger:element.querySelector('.graphics-two'),
                    start: '0%',
                    scrub: true,
                    end: '90%',
                    fastScrollEnd: true,
                }
            }
        );
    },[]);
    const cardBoxDes = "For this project, I was tasked with making a playing card set. I took inspiration from a YouTube show called Helluva Boss. I used characters drawn out in Adobe Illustrator to represent the face cards. Sticking to the hell theme, I used characters that represent one of the major sins as a jack. I themed the number cards around the sin that each jack represented. You can see more pictures in the Google Drives link below."
    const compositingDes = "For this project, I was tasked with making a composite image with a slight fantasy twist. I made a spider enclosure for this project, as you would see in a zoo, but I tried to show that the spider was much larger than usual. I used custom brushes for the web. I ensured that the lighting and shadows matched all the added pictures."
    const typographyDes = "For this project, I was tasked with making an emphasis typography advisement using a quote. For my quote, I picked a quote dealing with hurting and sorrow. I chose to use that to make an advertisement for the suicide prevention hotline."
    const trompeDes ="For this project, I was tasked with making a composite image with a strong Trompe-l’oeil effect advertising a company or service, with the piece inspired by a quote given by the teacher. I choices to center mine around a gym, using the saying, “A leopard can’t change its spots.” I combined parts of images from fit people. I emphasized aspects of the call ad to highlight that there is no easy way to change. You can see more at the Google Drive link below."
    return(
        <section className="content" ref={ref} id='graphics'>
            <div className="content-hero graphics-hero">
                <h1 className='content-hero-header'>Graphics</h1>
            </div>
            <ul className='projects'>
                <Projectcard
                    projectClass = 'graphics-one'
                    projectTitle = 'Card Box'
                    description = {cardBoxDes}
                    techList = {['Adobe Illustrator']}
                    isVideo = {false}
                    media = {project1}
                    hasLightbox = {true}
                    lightbox = {<GraphicsProject1Lightbox/>}
                    linkObj = {{GoogleDrives: "https://drive.google.com/drive/folders/1F3Yz9P-feMVB83g3aMA4MX_vCWeS7rxd?usp=sharing"}}
                    pannelClass = "card-picture"
                    width = '338'
                ></Projectcard>
                <Projectcard
                    projectClass = 'graphics-two'
                    projectTitle ='Compositing'
                    description ={compositingDes}
                    techList = {['Adobe Photoshop']}
                    isVideo = {false}
                    media = {project2}
                    hasLightbox= {true}
                    lightbox = {<GraphicsProject2Lightbox/>}
                    linkObj = {{GoogleDrives : "https://drive.google.com/drive/folders/14-w-zOR3h-IKAeTTvIVuGSAxWJ3VGHYg?usp=sharing"}}
                ></Projectcard>
                <Projectcard
                    projectClass ='graphics-three'
                    projectTitle = 'Typography'
                    description = {typographyDes}
                    techList = {['Adobe Illustrator']}
                    isVideo = {false}
                    media = {project3}
                    hasLightbox = {true}
                    lightbox = {<GraphicsProject3Lightbox/>}
                    linkObj = {{GoogleDrives: "https://drive.google.com/drive/folders/1P-_KiIEvVbl1BCohnCVsNqF3WBclOi9c?usp=sharing"}}
                ></Projectcard>
                <Projectcard
                    projectClass = 'graphics-four'
                    projectTitle = "Trompe-l'oeil"
                    description ={trompeDes}
                    techList = {['Adobe Photoshop']}
                    isVideo = {false}
                    media ={project4}
                    hasLightbox = {true}
                    lightbox ={<GraphicsProject4Lightbox/>}
                    linkObj = {{GoogleDrives: "https://drive.google.com/drive/folders/1OPq2g6kWPw4xtY77305BXCZc0we3FJLX?usp=sharing"}}
                    width = '338'
                ></Projectcard>
            </ul>
            <ReturnTop />
            <div className="custom-shape-divider-bottom-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id='graphics-svg' x1="0%" y1="0%" x2="40%" y2="100%">
                            <stop offset="0%" stop-color="#000120"/>
                            <stop offset="100%" stop-color="#000130"/>
                        </linearGradient>
                    </defs>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" id="graphics-fill"></path>
                </svg>
            </div>
        </section>
    )
}

export default Graphics