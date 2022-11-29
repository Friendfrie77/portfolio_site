import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import art1 from '../images/art_1.webp'
import art2 from '../images/art_2.webp'
function Animation(){
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".project_one"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .2,
                scrollTrigger: {
                    trigger: element.querySelector(".content_hero"),
                    start: "top",
                    scrub: true,
                    end: "center"
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".project_two"),
            {
                opacity: 0,
                x:-100
            },
            {
                opacity: 1,
                x:0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".project_one"),
                    start: "top-=110%",
                    scrub: true,
                    // markers: true,
                    end: "top-=10%",
                }
            }
        );
    },[]);
    return(
        <section className="content" ref={ref} id='animation'>
            <div className="content_hero animation_hero">
                <h1 className='content_hero_header'>Animation</h1>
            </div>
            <ul className='projects'>
                <li className="panel project_one" id="art_one">
                    <div className='panel_description'>
                        <div>
                            <h3 className='project_title'>Type as Shape</h3>
                            <img className='panel_description_img' src={art1} height="100%" width='700' alt="type as shape"/>
                            <div className='project_description'>
                                <p>For this project I was tasked to use type as a shape. This was done as part of understanding typography. The letters themselves are just basic fonts printed out with the shapes then traced onto carbon paper and transferred onto card stock. You can see more pictures, and some of the process in the google drives link below. </p>
                            </div>
                            <div className='project_links'>
                                <a href='https://drive.google.com/drive/folders/1eI5nZXYtQP1SvqBl9Vph3OJNKEt6nc6P?usp=sharing' target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel_picture'>
                        <img src={art1} height="100%" width='700' alt="type as shapes"/>
                    </div>
                </li>
                <li className="panel project_two" id="art_two">
                    <div className='panel_description'>
                        <div>
                            <h3 className='project_title'>Color Theory</h3>
                            <img className='panel_description_img' src={art2} height="100%" width='700' alt="color theory"/>
                            <div className='project_description'>
                                <p>This project was based around color theory and the Fibonacci sequence. I was tasked with laying out four different layouts using a different color theory for each. I then had to use Bristol board to mount the sections, bending the board for presentation. You can find more pictures in the Google Drives link below.</p>
                            </div>
                            <div className='project_links'>
                                <a href="https://drive.google.com/file/d/14RKKmwvl3jEMoPCkg9PZcBztX6cLq5ap/view?usp=sharing" target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32" fill='white'> <path d="M 11.4375 5 L 11.15625 5.46875 L 3.15625 18.46875 L 2.84375 18.96875 L 3.125 19.5 L 7.125 26.5 L 7.40625 27 L 24.59375 27 L 24.875 26.5 L 28.875 19.5 L 29.15625 18.96875 L 28.84375 18.46875 L 20.84375 5.46875 L 20.5625 5 Z M 13.78125 7 L 19.4375 7 L 26.21875 18 L 20.5625 18 Z M 12 7.90625 L 14.96875 12.75 L 8.03125 24.03125 L 5.15625 19 Z M 16.15625 14.65625 L 18.21875 18 L 14.09375 18 Z M 12.875 20 L 26.28125 20 L 23.40625 25 L 9.78125 25 Z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel_picture'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/A_AYO5lyMFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </li>
            </ul>
            <div class="custom-shape-divider-bottom-1668620987">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id='animation-svg' x1="0%" y1="0%" x2="40%" y2="100%">
                            <stop offset="0%" stop-color="#000130"/>
                            <stop offset="100%" stop-color="#000140"/>
                        </linearGradient>
                    </defs>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" id="animation-fill"></path>
                </svg>
            </div>
        </section>
    )
}

export default Animation