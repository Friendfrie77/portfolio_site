import {NavHashLink} from 'react-router-hash-link'
import {useRef} from "react";
import logo1 from '../images/logo2.png'
import logo from '../images/logo2.svg'

function Nav(){
    const check = useRef(null)
    const checkChange = () =>{
        if (check.current.checked){
            check.current.checked = !check.current.checked
        }
    }

    return(
        <nav>
            <div className="logo">
                <img src={logo1} height='50px' width='100%' alt="logo"></img>
            </div>
            <div className='socials'>

            </div>
            <input id="Mobile_Nav_toggle" type="checkbox" ref={check}/>
            <label className='Mobile_Nav_container' for="Mobile_Nav_toggle">
                <div className="Mobile_Nav" id='mobile-nav'></div>
            </label>
            <ul className='Nav_Links' id="nav-links">
                <li className='Nav_Item'><NavHashLink to='/#hero'>Home</NavHashLink></li>
                <li className='Nav_item dropdown'><button>Projects<span>&#9660;</span></button>
                    <ul className='nav_dropdown'>
                        <li className='Nav_Item'><NavHashLink
                        className='dropdown_link' onClick={checkChange} to="/#web">Development</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink onClick={checkChange} to='/#graphics' className='dropdown_link'>Graphics</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' onClick={checkChange} to='/#animation'>Animation</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' onClick={checkChange} smooth to='#arts'>Fine Art</NavHashLink></li>
                    </ul>
                </li>
                <li className='Nav_Item'><NavHashLink onClick={checkChange} to="#contact">Contact Me</NavHashLink></li>
            </ul>
        </nav>
    )
};

export default Nav