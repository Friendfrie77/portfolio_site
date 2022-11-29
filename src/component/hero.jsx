import heropic from "../images/selfie.webp"
import java from '../images/logo-javascript.svg'
import python from '../images/python.svg'
import post from '../images/postgresql.svg'
import photoshop from '../images/adobe-photoshop.svg'
import illustrator from '../images/adobe-illustrator.svg'
import flask from '../images/flask.svg'
import resume from '../Friend_Albert_Resume.pdf'
function hero(){
    return(
        <section className="hero">
            <div class="custom-shape-divider-top-1669676698">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="hero-img">
                <img className="selfie-img" src={heropic} height='100%' width='300px' alt=''/>
                <div className="hero-img-text">
                    <h1><span>Albert</span><span>Friend</span></h1>
                    <div className="social-links">
                        <a href='https://www.linkedin.com/in/albert-friend-2a4b71251/' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill='white' width="50" height="50" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                        <a href='https://github.com/Friendfrie77' target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill='white' viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
                        <a href="mailto:awfriend77@gmail.com" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill='white' viewBox="0 0 24 24"><path d="M11.99 0l-11.99 8.723v15.277h24v-15.277l-12.01-8.723zm.001 2.472l9.793 7.113-6.735 4.588-3.049-2.47-3.049 2.471-6.737-4.589 9.777-7.113zm-9.991 9.386l5.329 3.63-5.329 4.318v-7.948zm.474 10.142l9.526-7.723 9.526 7.723h-19.052zm19.526-2.194l-5.329-4.317 5.329-3.631v7.948z"/></svg></a>
                        <a href={resume} target='_blank'><svg width="50" height="50" fill='white' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg></a>
                    </div>
                </div>
            </div>
            <div className="hero-text">
                        <span>Goal-oriented Web and Multimedia Design student who is goal-oriented, works well in groups, and independent. Eager to learn new skills and apply them to making web applications. Skilled in HTML 5 and SCSS, with experience using Git and the Adobe Suite.</span>
            </div>
            <div className="tech-skills-container">
                <h1>Skills</h1>
                <div className="tech-skills">
                        <div className="skill">
                            <img src={java} alt='JavaScript logo in white' width='50px' height='50px'/>
                            <span>Javascript</span>
                        </div>
                        <div className="skill">
                            <img src={python} alt='Python logo in white' width='50px' height='50px'/>
                            <span>Python</span>
                        </div>
                        <div className="skill">
                            <img src={post} alt='PostgreSQL logo in white' width='50px' height='50px'/>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="skill">
                            <img src={flask} alt='Flask logo in white' width='50px' height='50px'/>
                            <span>Flask</span>
                        </div>
                        <div className="skill">
                            <img src={photoshop} alt='Photoshop logo in white' width='50px' height='50px'/>
                            <span>Adobe Photoshop</span>
                        </div>
                        <div className="skill">
                            <img src={illustrator} alt='Illustrator logo in white' width='50px' height='50px'/>
                            <span>Adobe Illustrator</span>
                        </div>
                    </div>
            </div>
            <div class="custom-shape-divider-bottom">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    )
}
export default hero