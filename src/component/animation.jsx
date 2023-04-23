import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReturnTop from './ReturnTop';
function Animation(){
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".animation-one"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".animation-hero"),
                    start: "-75%",
                    scrub: true,
                    end: "15%",
                    fastScrollEnd: true
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".animation-two"),
            {
                opacity: 0,
                y:-100
            },
            {
                opacity: 1,
                y:0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".animation-one"),
                    start: "top-=110%",
                    scrub: true,
                    end: "top-=10%",
                    fastScrollEnd: true
                }
            }
        );
    },[]);
    return(
        <section className="content" ref={ref} id='animation'>
            <div className="content-hero animation-hero">
                <h1 className='content-hero-header'>Animation</h1>
            </div>
            <ul className='projects'>
                <li className="panel project-one animation-one">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Stop Motion</h3>
                            <iframe className='panel-description-img' height="300px" width='100%' src="https://www.youtube.com/embed/j7nZ2l1WTTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading='lazy'></iframe>
                            <div className='project-description'>
                                <p>For this project, I was tasked with making a stop-motion animation. I used this project to tie my love for tech into the class and project. I did this by making a stop motion for a keyboard building itself. All the photos were taken via a phone camera. It is set to music from Final Fantasy XIV.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Animation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <iframe width="auto" height="350" src="https://www.youtube.com/embed/j7nZ2l1WTTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading='lazy'></iframe>
                    </div>
                    <hr className='content-hr'></hr>
                </li>
                <li className="panel project_two animation-two">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Music Video</h3>
                            <iframe className='panel-description-img' height="300px" width='100%' src="https://www.youtube.com/embed/A_AYO5lyMFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading='lazy'></iframe>
                            <div className='project-description'>
                                <p>For this project, I was tasked to make a music video for a song. For my video, I picked a song called “Steh auf” by Lindemann. The song is about a child who found their mother dead from a drug overdose. I tried to style my video to make it seem like it is a child either drawing or thinking about all the things that they could do together. This was my first real go at animation outside of code-based animation.  </p>
                            </div>
                            <ul className='tech-list'>
                                <li>Adobe Animation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <iframe height="350" width='auto' src="https://www.youtube.com/embed/A_AYO5lyMFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading='lazy'></iframe>
                    </div>
                    <hr className='content-hr'></hr>
                </li>
            </ul>
            <ReturnTop />
            <div className="custom-shape-divider-bottom-wave">
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