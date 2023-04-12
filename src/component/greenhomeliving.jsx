import brainstorming1 from '../images/greenhomeliving/images/brainstorming-1.webp';
import brainstorming2 from '../images/greenhomeliving/images/brainstorming-2.webp';
import sitereserch from '../images/greenhomeliving/images/site-research.webp';
import sitegoals from '../images/greenhomeliving/images/site-goals.webp';
import sketch1 from '../images/greenhomeliving/images/green-sketch-1.webp';
import sketch2 from '../images/greenhomeliving/images/green-sketch-2.webp';
import sketch3 from '../images/greenhomeliving/images/green-sketch-3.webp';
import greenlogo from '../images/greenhomeliving/svg/green-logo.svg';
import greenflow from '../images/greenhomeliving/images/green-flowchart.webp';
import greenfinal from '../images/greenhomeliving/images/green-layout.webp';
import { Carousel} from 'react-responsive-carousel';
function GreenHomeLiving(){
    return(
        <section className="design-process">
            <div className='green-home-hero'>
                <h1 className='content-hero-header'>Green Home Living Design Process</h1>
            </div>
            <div className='design-content-wrapper'>
                <div className='brainstorming'>
                    <h1>Brainstorming and Planing</h1>
                    <p>The first step in the processes for me was brainstorming ideas, for the given prompt of nature. After coming up with an idea that both fit with the theme that I thought I could get all the content for myself, I looked at sites with similar category. I also set the sites goals and did some personas for users that might use the site I then drew out some rough ideas on how the site might look.</p>
                    <div className='design-carousel'>
                        <div>
                            <h1>Brainstorming</h1>
                            <Carousel>
                                <div>
                                    <img src={brainstorming1} height="100%" width='700' alt="brainstorming 1"/>
                                </div>
                                <div>
                                    <img src={brainstorming2} height="100%" width='700' alt="brainstorming 2"/>
                                </div>
                                <div>
                                    <img src={sitereserch} height="100%" width='700' alt="site reserch"/>
                                </div>
                                <div>
                                    <img src={sitegoals} height="100%" width='700' alt="site goals"/>
                                </div>
                            </Carousel>
                        </div>
                        <div>
                            <h1>Sketches</h1>
                            <Carousel>
                                <div>
                                    <img src={sketch1} height="100%" width='700' alt="sketch 1"/>
                                </div>
                                <div>
                                    <img src={sketch2} height="100%" width='700' alt="sketch 2"/>
                                </div>
                                <div>
                                    <img src={sketch3} height="100%" width='700' alt="sketch 3"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <p>After the initial sketches and brainstorming, I then designed the logo for the site in Adobe Illustrator. Along with making a flow chart for how the website will navigate and did the final layout in Illustrator, including a tablet and mobile layout.</p>
                    <div className='design-carousel' id='design-carousel-2'>
                        <div>
                            <Carousel>
                                <div>
                                    <img src={greenlogo} height="100%" width='700' alt="Logo for site"/>
                                </div>
                                <div>
                                    <img src={greenflow} height="100%" width='700' alt="flowchart"/>
                                </div>
                                <div>
                                    <img src={greenfinal} height="100%" width='700' alt="final wireframe"/>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className='brainstorming'>
                    <h1>Redesign</h1>
                    <p>As part of another class, I was tasked with improving the site. I chose to redesign the site as a whole. I wanted to keep a similar layout, but simplify the colors and remove some of the content that I felt was unneeded. I used Figma to do a general layout. Sadly I didn't not have time to fully lay out the site, as I was working on other large projects while working on it. You can find the layout <a href='https://www.figma.com/file/JPbbR62Z8e5nPvk01ziUXo/Untitled?node-id=0%3A1&t=JNXj8BPvI01KtJdh-1' target='_blank'>here</a>.</p>
                </div>
                <div className='design-development'>
                    <h1>Development</h1>
                    <p>After the brainstorming and layout was done I started coding. For this project, I decided to start branching out, learning more than what was being taught in class. I switched from using Dreamweaver, to start learning Visual Studio Code, and getting use to the hotkeys and other addons that help to save time while coding. I also switched from using normal CSS to a preprocessor. For this project, I also had to capture all my own pictures, or modify others. For me this project was a good learning experience in thinking about layouts using more than floats. I feel like I have come a long way from that project, in both my coding design. You can see the site live <a href='https://web-112-final-project.onrender.com/index.html' target= '_blank'>here</a></p>
                </div>
            </div>
        </section>
    );
};
export default GreenHomeLiving