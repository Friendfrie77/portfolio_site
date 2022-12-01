import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel} from 'react-responsive-carousel';
import art1 from '../images/art_1.webp';
import art2 from '../images/art_2.webp';
import arts3 from '../images/arts_3.webp';
import arts3_1 from '../images/arts_3_1.webp';
import arts3_2 from '../images/arts_3_2.webp';
function Arts(){
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".arts-one"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-hero"),
                    start: "-35%",
                    scrub: true,
                    end: "50%"
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".arts-two"),
            {
                opacity: 0,
                y:-100
            },
            {
                opacity: 1,
                y:0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-one"),
                    start: "-70%",
                    scrub: true,
                    end: "0%",
                }
            }
        );
    },[]);
    useEffect(()=>{
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".arts-three"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-two"),
                    start: "-65%",
                    scrub: true,
                    end: '45%',
                }
            }
        );
    },[]);
    return(
        <section className="content" ref={ref} id='arts'>
            <div className="content-hero arts-hero">
                <h1 className='content-hero-header'>Fine Arts</h1>
            </div>
            <ul className='projects'>
                <li className="panel project-one arts-one" id="art-one">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Type as Shape</h3>
                            <img className='panel-description-img' src={art1} height="100%" width='700' alt="type as shape"/>
                            <div className='project-description'>
                                <p>For this project I was tasked to use type as a shape. This was done as part of understanding typography. The letters themselves are just basic fonts printed out with the shapes then traced onto carbon paper and transferred onto card stock. You can see more pictures, and some of the process in the google drives link below. </p>
                            </div>
                            <div className='project-links'>
                                <a href='https://drive.google.com/drive/folders/1eI5nZXYtQP1SvqBl9Vph3OJNKEt6nc6P?usp=sharing' target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={art1} height="100%" width='700' alt="type as shapes"/>
                    </div>
                </li>
                <li className="panel project-two arts-two">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Color Theory</h3>
                            <img className='panel-description-img' src={art2} height="100%" width='700' alt="color theory"/>
                            <div className='project-description'>
                                <p>This project was based around color theory and the Fibonacci sequence. I was tasked with laying out four different layouts using a different color theory for each. I then had to use Bristol board to mount the sections, bending the board for presentation. You can find more pictures in the Google Drives link below.</p>
                            </div>
                            <div className='project-links'>
                                <a href="https://drive.google.com/file/d/14RKKmwvl3jEMoPCkg9PZcBztX6cLq5ap/view?usp=sharing" target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={art2} height="100%" width='700' alt="color theory"/>
                    </div>
                </li>
                <li className="panel project-three arts-three" id='arts-three'>
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Wedding Sign</h3>
                            <div className='panel-description-img'>
                                <Carousel>
                                    <div>
                                        <img src={arts3} height="100%" width='700' alt="Wedding Sign"/>
                                    </div>
                                    <div>
                                        <img src={arts3_1} height="100%" width='700' alt="Wedding Sign"/>
                                    </div>
                                    <div>
                                        <img  height="100%" width='700' src={arts3_2} alt="Wedding Sign"/>
                                    </div>
                                </Carousel>
                            </div>
                            <div className='project-description'>
                                <p>This was a personal project for my sister’s wedding. I made the design in Adobe Illustrator and then laser-cut it out of acrylic. It was a rush job as I found someone to cut out the sign frame about a week before the wedding. Due to a mix-up at the cutter, the channels are not entirely cut, so the lights are glued to acrylic. I am currently building a 2.0 of the sign with the proper cutouts to hold the lights.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Illustrator</li>
                            </ul>
                            <div className='project-links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                    <Carousel>
                            <div>
                                <img src={arts3} height="100%" width='700' alt="Wedding Sign"/>
                            </div>
                            <div>
                                <img src={arts3_1} height="100%" width='700' alt="Wedding Sign"/>
                            </div>
                            <div>
                                <img  height="100%" width='700' src={arts3_2} alt="Wedding Sign"/>
                            </div>
                        </Carousel>
                    </div>
                </li>
            </ul>
            <div class="custom-shape-divider-bottom-triangle">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id='art-svg' x1="0%" y1="0%" x2="00%" y2="50%">
                            <stop offset="0%" stop-color="#000140"/>
                            <stop offset="100%" stop-color="#000155"/>
                        </linearGradient>
                    </defs>
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill" id='art-fill'></path>
                </svg>
            </div>
        </section>
    )
}

export default Arts