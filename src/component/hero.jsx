import heropic from "../images/selfie.jpg"
function hero(){
    return(
        <section className="hero">
            <div className="hero-img">
                <img className="selfie-img" src={heropic} height='100%' width='300px' alt=''/>
                <h1><span>Albert</span><span>Friend</span></h1>
            </div>
        </section>
    )
}
export default hero