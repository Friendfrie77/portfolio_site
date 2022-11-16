import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toebean from '../images/test2.png';
import site2 from '../images/site2.png';
import SqlFinal from '../images/test3.png'
function Web(){
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
        <section className="content" ref={ref} id='web'>
            <div className="content_hero web_hero">
                <h1 className='content_hero_header'>Web and Programing</h1>
            </div>
            <ul className='projects'>
                <li className="panel project_one" id="web_one">
                    <div className='panel_description'>
                        <div>
                            <h3 className='project_title'>Toebean Sanctuary</h3>
                            <img className='panel_description_img' src={toebean} height="100%" width='700' alt=""/>
                            <div className='project_description'>
                                <p>For this project I was tasked with making a site with using technology that I haven’t used before. To answer that task, I choose to make a full stack site using the Flask framework for a made-up cat sanctuary/adoption center. To handle data I used PostgreSQL, to store uses emails, and sign-ups for voluntaries. This project allowed me to start learning how to work with databases better, and to better handle JSON data.</p>
                            </div>
                            <ul className='tech_list'>
                                <li>Flask</li>
                                <li>Heroku</li>
                                <li>GSAP</li>
                                <li>PostgreSQL</li>
                                <li>SQLAlchemy</li>
                            </ul>
                            <div className='project_links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel_picture'>
                        <img src={toebean} height="100%" width='700' alt=""/>
                    </div>
                </li>
                <li className="panel project_two" id="web_two">
                    <div className='panel_description'>
                        <div>
                            <h3 className='project_title'>Green Home Living</h3>
                            <img className='panel_description_img' src={site2} height="100%" width='700' alt=""/>
                            <div className='project_description'>
                                <p>Aute ut occaecat incididunt eu veniam irure. Laboris consequat ad aliquip elit adipisicing sint. Tempor cillum laborum exercitation tempor ex et esse sunt officia eu dolore. Culpa cupidatat consequat irure ut esse labore commodo commodo qui qui.</p>
                            </div>
                            <ul className='tech_list'>
                                <li>HTML5</li>
                                <li>SCSS</li>
                                <li>Javascript</li>
                            </ul>
                            <div className='project_links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel_picture'>
                        <img src={site2} height="100%" width='700' alt=""/>
                    </div>
                </li>
                <li className="panel project_three" id="web_three">
                    <div className='panel_description'>
                        <div>
                            <h3 className='project_title'>Sql Final Project</h3>
                            <div className='project_description'>
                                <p>Aute ut occaecat incididunt eu veniam irure. Laboris consequat ad aliquip elit adipisicing sint. Tempor cillum laborum exercitation tempor ex et esse sunt officia eu dolore. Culpa cupidatat consequat irure ut esse labore commodo commodo qui qui.</p>
                            </div>
                            <ul className='tech_list'>
                                <li>SQL</li>
                            </ul>
                            <div className='project_links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel_picture'>
                        <img src={SqlFinal} height="100%" width='700'/>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Web