import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
import toebean from '../images/test2.webp';
import site2 from '../images/site2.webp';
import SqlFinal from '../images/test3.webp'
function Web(){
    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".web-one"),
            {
                opacity: 0,
                x: -100,
            },
            {
                opacity: 1,
                x: 0,
                duration: .2,
                scrollTrigger: {
                    trigger: element.querySelector(".web-hero"),
                    start: "-20%",
                    scrub: true,
                    end: "30%"
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current;
        gsap.fromTo(
            element.querySelector(".web-two"),
            {
                opacity: 0,
                y:-100
            },
            {
                opacity: 1,
                duration: .5,
                y: 0,
                scrollTrigger: {
                    trigger: element.querySelector(".web-hero"),
                    start: "60%",
                    scrub: true,
                    end: "130%"
                }
            }
        );
    },[]);
    useEffect(()=> {
        const element = ref.current
        gsap.fromTo(
            element.querySelector(".web-three"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .7,
                scrollTrigger: {
                    trigger: element.querySelector(".project-one"),
                    start:'0%',
                    scrub: true,
                    end: "bottom"
                }
            }
        );
    },[]);
    return(
        <section className="content" ref={ref} id='web'>
            <div className="content-hero web-hero">
                <h1 className='content-hero-header'>Web and Programing</h1>
            </div>
            <ul className='projects'>
                <li className="panel project-one web-one">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Toebean Sanctuary</h3>
                            <img className='panel-description-img' src={toebean} height="100%" width='700' alt=""/>
                            <div className='project-description'>
                                <p>For this project I was tasked with making a site with using technology that I haven’t used before. To answer that task, I choose to make a full stack site using the Flask framework for a made-up cat sanctuary/adoption center. To handle data I used PostgreSQL, to store uses emails, and sign-ups for voluntaries. This project allowed me to start learning how to work with databases better, and to better handle JSON data.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Flask</li>
                                <li>Heroku</li>
                                <li>GSAP</li>
                                <li>PostgreSQL</li>
                                <li>SQLAlchemy</li>
                            </ul>
                            <div className='project-links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank' title='Github Link'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={toebean} height="100%" width='700' alt=""/>
                    </div>
                </li>
                <li className="panel project-two web-two">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Green Home Living</h3>
                            <img className='panel-description-img' src={site2} height="100%" width='700' alt="Green Home Living"/>
                            <div className='project-description'>
                                <p>For this project I was tasked with making a site using a grid system to layout a site responsive site themed around plants. I chose to make a site about how transform your home into a green home. I used this project to start learning SCSS and JavaScript. You can find both the code, design process, and the site in the links below.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>HTML5</li>
                                <li>SCSS</li>
                                <li>Javascript</li>
                                <li>Adobe Illustrator</li>
                            </ul>
                            <div className='project-links'>
                                <a href='https://github.com/Friendfrie77/Web-240-Project' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                                <a href='https://web-112-final-project.onrender.com/index.html' target='_blank' title='Live site'><svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" fill='white' fill-rule="evenodd" clip-rule="evenodd"><path d="M12.02 0c6.614.011 11.98 5.383 11.98 12 0 6.623-5.376 12-12 12-6.623 0-12-5.377-12-12 0-6.617 5.367-11.989 11.981-12h.039zm3.694 16h-7.427c.639 4.266 2.242 7 3.713 7 1.472 0 3.075-2.734 3.714-7m6.535 0h-5.523c-.426 2.985-1.321 5.402-2.485 6.771 3.669-.76 6.671-3.35 8.008-6.771m-14.974 0h-5.524c1.338 3.421 4.34 6.011 8.009 6.771-1.164-1.369-2.059-3.786-2.485-6.771m-.123-7h-5.736c-.331 1.166-.741 3.389 0 6h5.736c-.188-1.814-.215-3.925 0-6m8.691 0h-7.685c-.195 1.8-.225 3.927 0 6h7.685c.196-1.811.224-3.93 0-6m6.742 0h-5.736c.062.592.308 3.019 0 6h5.736c.741-2.612.331-4.835 0-6m-12.825-7.771c-3.669.76-6.671 3.35-8.009 6.771h5.524c.426-2.985 1.321-5.403 2.485-6.771m5.954 6.771c-.639-4.266-2.242-7-3.714-7-1.471 0-3.074 2.734-3.713 7h7.427zm-1.473-6.771c1.164 1.368 2.059 3.786 2.485 6.771h5.523c-1.337-3.421-4.339-6.011-8.008-6.771"/></svg></a>
                                <Link to='/greenhomeliving' title='Design process'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill='white' viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg></Link>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={site2} height="100%" width='700' alt="Green Home Living"/>
                    </div>
                </li>
                <li className="panel project-three web-three">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>Sql Final Project</h3>
                            <img className='panel-description-img' src={SqlFinal} height="100%" width='700' alt="Sql Final"/>
                            <div className='project-description'>
                                <p>For this project I was tasked to make a mock SQL database that handled a medical study. I was tasked with making functions and stored procedures that would allow doctors and research staff easily be able to enter in patients into the studies and into the offices database for storing patients. It also had to allow for adding patients to the studies and removing them from studies with reasons that were given in the data. You can see the full SQL script in the GitHub link below.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>SQL</li>
                            </ul>
                            <div className='project-links'>
                                <a href='https://github.com/Friendfrie77/It-112-Final' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={SqlFinal} height="100%" width='700'/>
                    </div>
                </li>
                <li className="panel project-three web-five">
                    <div className='panel-description'>
                        <div>
                            <h3 className='project-title'>OOP Final</h3>
                            <img className='panel-description-img' src={SqlFinal} height="100%" width='700' alt="Sql Final"/>
                            <div className='project-description'>
                                <p>For this project I was tasked with making a full application using OOP to make a bike rental app. While the base classes where given, I heavily modified and added to the classes for them to fit specifications given. I coded and debugged the program over the course of a week. You can find the code in the GitHub link below.</p>
                            </div>
                            <ul className='tech-list'>
                                <li>Python</li>
                            </ul>
                            <div className='project-links'>
                                <a href='https://github.com/Friendfrie77/CPDM-120-Final' title='GitHub link' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                            </div>
                        </div>
                    </div>
                    <div className='panel-picture'>
                        <img src={SqlFinal} height="100%" width='700'/>
                    </div>
                </li>
            </ul>
            <div class="custom-shape-divider-bottom-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id='web-svg' x1="0%" y1="0%" x2="40%" y2="100%">
                            <stop offset="0%" stop-color="#000110"/>
                            <stop offset="100%" stop-color="#000120"/>
                        </linearGradient>
                    </defs>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" id="web-fill"></path>
                </svg>
            </div>
        </section>
    )
}

export default Web