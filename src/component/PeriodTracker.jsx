import {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import countdown from '../images/period-tracker/react-countdown.webp';
import redux from '../images/period-tracker/redux.webp';
function PeriodTracker() {
    function importAll(r) {
        return r.keys().map(r);
      }
    const images = importAll(require.context('../images/period-tracker/figma', false, /\.(webp)$/));
    useEffect(() =>{
        window.scrollTo(0,0)
    })
  return (
    <section className='design-process'>
        <div className='period-tracker-hero'>
            <h1 className='content-hero-header'>Simple Period Tracker Design Process</h1>
        </div>
        <div className='design-content-wrapper'>
            <div className='brainstorming'>
                <h1>Brainstorming and Planing</h1>
                <p>This project had slightly different brainstorming and planning than most. I started this project at the request of my partner who wanted a simple way to track her menstrual cycle. As a result, most of the planning was doing research into how I can accomplish that. The first step in that was figuring out what she fully wanted in the application. Her requirements were that it presented an easy-to-read countdown till her period started, and text notifications. After that, I set about looking at other applications and made my layout. You can find that <a href='https://www.figma.com/file/XoyqAsLrRRlolo2UfP4q8b/period-app-project?node-id=0%3A1&t=UbvANrLCfr65CVWC-1' target='_blank' rel='noreferrer'>here</a>, or below.</p>
            </div>
            <div className='tracker-carousel'>
                <div>
                    <h1>Page Layout</h1>
                    <Carousel>
                        {images.map((imgSrc) => (
                        <div>
                            <img src={imgSrc} alt="layout images" width='auto' height='400px'/>
                        </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <div className='brainstorming'>
                <h1>About layout</h1>
                <p>I based the layouts loosely on some of the larger phone applications in the market. I was originally going to do a lighter gradient background like on some of the pictures but then shifted to the darker one as I felt it looked better. I spent the most time working on getting the home page set, as that is what my partner it going to use the most.</p>
            </div>
            <div className='design-development'>
                <h1>Development</h1>
                <p>The application itself was made using the MERN stack (MongoDB, Express, React, and Node.js). While I was originally going to use a service like OAuth for login, I decided to challenge myself to build the backend authentication myself. This allowed me to learn about auth tokens, and start understanding how to handle them. I used Redux for saving user states across the page. This allows for the application to make fewer calls to the backend to fetch user information. Once I had the basics working I moved on to building out the other parts of the application. I found some great packages that help make parts like the ribbon calendar, and countdown timer. I then focused on getting the major backend parts done. For text notifications, I am using a service called Twilio, paired with node-schedule to check once a day if a user requires a notification.</p>
                <h2>Future plans</h2>
                <p>I am planning to add more to the application in the future. I am planning on integrating symptom tracking to help with the accuracy of the application. I also am planning on adding OAuth login options to allow a user to log in using other accounts. I am also going to be refining the design more, as time was a major issue when making this application </p>
            </div>
            <div className='development-resources'>
                <h1>Resources that helped</h1>
                <p>Below are some of resources that I used to help development of this application.</p>
                <div className='videos'>
                    <iframe  className='video' src="https://www.youtube.com/embed/K8YELRmUb5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className='video' src="https://www.youtube.com/embed/AWlLhRQJvtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <a href='https://github.com/vydimitrov/react-countdown-circle-timer/tree/master/packages/web#readme' target='_blank' rel='noreferrer'><img className='dev-picture' src={countdown} alt='thumbnail for react-countdown-timer'/></a>
                    <a href='https://react-redux.js.org/' target='_blank' rel='noreferrer'><img className='dev-picture' src={redux} alt='thumbnail for redux website' width='100%' height='auto'/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PeriodTracker
