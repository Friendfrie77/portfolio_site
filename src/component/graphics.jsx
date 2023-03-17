import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import project1 from '../images/graphics-1.webp'
import GraphicsProject1Lightbox from './graphicsproject1'
import GraphicsProject2Lightbox from './graphicsproject2'
import GraphicsProject3Lightbox from './graphicsproject3'
import GraphicsProject4Lightbox from './graphicsproject4'
import project2 from '../images/graphics-2.webp'
import project3 from '../images/graphics/typography_final.webp'
import project4 from '../images/graphics-4.webp'
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
                duration: .2,
                scrollTrigger: {
                    trigger: element.querySelector(".graphics-hero"),
                    start: "-50%",
                    scrub: true,
                    end: "55%"
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
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".graphics-one"),
                    start: "-65%",
                    scrub: true,
                    end: "10%",
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
                duration:.7,
                scrollTrigger:{
                    trigger:element.querySelector('.graphics-two'),
                    start: '-160%',
                    scrub: true,
                    end: '-40%'
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
                duration:.7,
                scrollTrigger:{
                    trigger:element.querySelector('.graphics-three'),
                    start: '-90%',
                    scrub: true,
                    end: '10%'
                }
            }
        );
    },[]);
    return(
        <section className="content" ref={ref} id='graphics'>
            <div className="content-hero graphics-hero">
                <h1 className='content-hero-header'>Graphics</h1>
            </div>
            <ul className='projects'>
                <li className="panel project-one graphics-one">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Card box</h3>
                            <div className='panel-description-img'>
                                <img src={project1} height="100%" width='700' alt="Playing cards"/>
                                <GraphicsProject1Lightbox />
                            </div>
                            <div className='project-description'>
                                <p>For this project, I was tasked with making a playing card set. I took inspiration from a YouTube show called Helluva Boss. I used characters drawn out in Adobe Illustrator to represent the face cards. Sticking to hell theme, I used characters that represent one of the major sins as a jack. I themed the number cards around the sin that each jack represented. You can see more pictures in the Google Drives link below.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Illustrator</li>
                            </ul>
                            <div className='project-links'>
                                <a href="https://drive.google.com/drive/folders/1F3Yz9P-feMVB83g3aMA4MX_vCWeS7rxd?usp=sharing" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={project1} height="100%" width='700' alt="playing cards"/>
                        <GraphicsProject1Lightbox />
                    </div>
                </li>
                <li className="panel project-two graphics-two">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Compositing</h3>
                            <div className='panel-description-img'>
                                <img src={project2} height="100%" width='700' alt="Compositing"/>
                                <GraphicsProject2Lightbox />
                            </div>
                            <div className='project-description'>
                                <p>For this project, I was tasked with making a composite image with a slight fantasy twist. I made a spider enclosure for this project, as you would see in a zoo, but I tried to show that the spider was much larger than usual. I used custom brushes for the web. I ensured that the lighting and shadows matched all the added pictures. </p>
                            </div>
                            <ul className='tech-list'>
                                <l1>Adobe Photoshop</l1>
                            </ul>
                            <div className='project-links'>
                                <a href="https://drive.google.com/drive/folders/14-w-zOR3h-IKAeTTvIVuGSAxWJ3VGHYg?usp=sharing" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={project2} height="100%" width='700' alt="Compositing"/>
                        <GraphicsProject2Lightbox />
                    </div>
                </li>
                <li className="panel project-three graphics-three">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Typography</h3>
                            <div className='panel-description-img'>
                            <img src={project3} height="100%" width='700' alt='Typography'/>
                            <GraphicsProject3Lightbox />
                            </div>
                            <div className='project-description'>
                                <p>For this project I was tasked with making an emphasis typography advisement using a quote. For my quote I picked a quote dealing with hurting and sorrow. I chose to use that to make an advertisement for the suicide prevention hotline. </p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Illustrator</li>
                            </ul>
                            <div className='project-links'>
                                <a href="https://drive.google.com/drive/folders/1P-_KiIEvVbl1BCohnCVsNqF3WBclOi9c?usp=sharing" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={project3} height="100%" width='auto' alt='Typography'/>
                        <GraphicsProject3Lightbox />
                    </div>
                </li>
                <li className="panel project-four graphics-four">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Trompe-l'oeil</h3>
                            <div className='panel-description-img'>
                                <img src={project4} height="100%" width='277' alt="Trompe-l'oeil"/>
                                <GraphicsProject4Lightbox />
                            </div>
                            <div className='project-description'>
                                <p>For this project, I was tasked with making a composite image with a strong Trompe-l’oeil effect advertising a company or service, with the piece inspired by a quote given by the teacher. I choices to center mine around a gym, using the saying, “A leopard can’t change its spots.” I combined parts of images from fit people. I emphasized aspects of the call ad to highlight that there is no easy way to change. You can see more at the Google drives link below.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Photoshop</li>
                            </ul>
                            <div className='project-links'>
                                <a href="https://drive.google.com/drive/folders/1OPq2g6kWPw4xtY77305BXCZc0we3FJLX?usp=sharing" target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={project4} height="100%" width='277' alt="Trompe-l'oeil"/>
                        <GraphicsProject4Lightbox />
                    </div>
                </li>
            </ul>
            <div class="custom-shape-divider-bottom-wave">
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