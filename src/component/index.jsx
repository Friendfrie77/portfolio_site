import Hero from './hero'
import Web from './web'
import Graphics from './graphics';
import Arts from './arts'
import Animation from './animation'

function Index(){
    return(
        <div className='main-content-wrapper' >
            <Hero />
            <Web />
            <Graphics />
            <Animation />
            <Arts />
        </div>
    )
};
export default Index
