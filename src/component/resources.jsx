import { Carousel} from 'react-responsive-carousel'
import project1 from '../images/graphics-1.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Test(){
    return(
        <section className="content" id='graphics'>
            <div className='panel_picture'>
                <Carousel>
                    <div>
                        <img src={project1} height="100%" width='700' alt=""/>
                    </div>
                    <div>
                        <img src={project1} height="100%" width='700' alt=""/>
                    </div>
                    <div>
                        <img src={project1} height="100%" width='700' alt=""/>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default Test