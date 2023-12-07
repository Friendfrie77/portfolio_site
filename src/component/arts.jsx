import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import art1 from '../images/art/main-page/art_1.webp';
import ArtsProject1 from './artsproject1';
import art2 from '../images/art/main-page/art_2.webp';
import ArtsProject2 from './artsproject2';
import arts3 from '../images/art/main-page/arts_3.webp';
import ArtsProject3 from './artsproject3';
import ReturnTop from './ReturnTop';
import Projectcard from './Projectcard';
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
                duration: .5,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-hero"),
                    start: "-50%",
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
            element.querySelector(".arts-two"),
            {
                opacity: 0,
                y:-100
            },
            {
                opacity: 1,
                y:0,
                duration: .5,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-hero"),
                    start: "40%",
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
            element.querySelector(".arts-three"),
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: .5,
                scrollTrigger: {
                    trigger: element.querySelector(".arts-one"),
                    start: "-10%",
                    scrub: true,
                    end: '25%',
                    fastScrollEnd: true,
                }
            }
        );
    },[]);
    const typeDes = "For this project, I was tasked to use type as a shape. This was done as part of understanding typography. The letters themselves are just basic fonts printed out with the shapes then traced onto carbon paper and transferred onto card stock. You can see more pictures, and some of the processes in the Google Drive link below."
    const colorDes = "This project was based on color theory and the Fibonacci sequence. I was tasked with laying out four different layouts using a different color theory for each. I then had to use Bristol board to mount the sections, bending the board for presentation. You can find more pictures in the Google Drives link below."
    const signDes = "This was a personal project for my sister’s wedding. I made the design in Adobe Illustrator and then laser-cut it out of acrylic. It was a rush job as I found someone to cut out the sign frame about a week before the wedding. Due to a mix-up at the cutter, the channels are not entirely cut, so the lights are glued to acrylic. I am currently building a 2.0 of the sign with the proper cutouts to hold the lights."
    return(
        <section className="content" ref={ref} id='arts'>
            <div className="content-hero arts-hero">
                <h1 className='content-hero-header'>Fine Arts</h1>
            </div>
            <ul className='projects'>
                <Projectcard
                    projectClass = 'arts-one'
                    projectTitle = "Type as Shape"
                    description = {typeDes}
                    isVideo = {false}
                    media = {art1}
                    hasLightbox = {true}
                    lightbox = {<ArtsProject1/>}
                    linkObj = {{GoogleDrive: 'https://drive.google.com/drive/folders/1eI5nZXYtQP1SvqBl9Vph3OJNKEt6nc6P?usp=sharing'}}
                ></Projectcard>
                <Projectcard
                    projectClass = "arts-two"
                    projectTitle = "Color Theory"
                    description = {colorDes}
                    isVideo = {false}
                    media = {art2}
                    hasLightbox = {true}
                    lightbox = {<ArtsProject2/>}
                    linkObj = {{GoogleDrive: 'https://drive.google.com/drive/folders/14BJpquid2JzYRvbpiNFOkZUieHNhdqGh?usp=sharing'}}
                ></Projectcard>
                <Projectcard
                    projectClass = 'arts-three'
                    projectTitle = 'Wedding Sign'
                    description = {signDes}
                    isVideo = {false}
                    media= {arts3}
                    hasLightbox = {true}
                    lightbox = {<ArtsProject3 />}
                    techList = {['Adobe Illustrator']}
                ></Projectcard>
            </ul>
            <ReturnTop />
            <div className="custom-shape-divider-bottom-triangle">
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