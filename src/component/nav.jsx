import {BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link'
import {useRef} from "react";
import logo from '../images/Untitled-1.svg'

function Nav(){
    const check = useRef(null)
    const checkChange = () =>{
        if (check.current.checked){
            check.current.checked = !check.current.checked
        }
    }

    return(
        <nav>
            <div className="Logo">
                <img src={logo} height='100px' width='100%'></img>
            </div>
            <div className='socials'>

            </div>
            <input id="Mobile_Nav_toggle" type="checkbox" ref={check}/>
            <label className='Mobile_Nav_container' for="Mobile_Nav_toggle">
                <div className="Mobile_Nav" id='mobile-nav'></div>
            </label>
            <ul className='Nav_Links' id="nav-links">
                <li className='Nav_Item'><Link onClick={checkChange} to='/'>Home</Link></li>
                <li className='Nav_item dropdown'><a href='' aria-haspopup="ture">Projects</a>
                    <ul className='nav_dropdown' aria-label='submenu'>
                        <li className='Nav_Item'><NavHashLink
                        className='dropdown_link' onClick={checkChange} to="/#web">Development</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink onClick={checkChange} to='/#graphics' className='dropdown_link'>Graphics</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' onClick={checkChange} to='/#animation'>Animation</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' onClick={checkChange} smooth to='#arts'>Fine Art</NavHashLink></li>
                    </ul>
                </li>
                <li className='Nav_Item'><NavHashLink onClick={checkChange} to="#contact">Contact Me</NavHashLink></li>
                <li className='Nav_Item'><Link onClick={checkChange} to='/resources'>Resources</Link></li>
            </ul>
        </nav>
    )
};

export default Nav