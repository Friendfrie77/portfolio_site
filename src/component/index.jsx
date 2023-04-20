import Hero from './hero';
import Web from './web';
import Graphics from './graphics';
import Arts from './arts';
import Animation from './animation';

function Index(){
    return(
        <div className='main-content-wrapper' id='wrapper' >
            <Hero />
            <Web />
            <Graphics />
            <Arts />
            <Animation />
        </div>
    )
};
export default Index
