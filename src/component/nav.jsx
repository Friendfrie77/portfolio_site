import {BrowserRouter as Router, Routes, Route, Link, HashRouter } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link'
import {useState} from "react";
import logo from '../images/Untitled-1.svg'

function Nav(){
    const [open, setOpen] = useState(false);
    const handleClickAway = () =>{
        setOpen(false);
        console.log("test")
        
    };

    const handleClick = () =>{
        setOpen(!open);
    };

    return(
        <nav>
            <div className="Logo">
                <img src={logo} height='100px' width='100%'></img>
            </div>
            <div className='socials'>

            </div>
            <input id="Mobile_Nav_toggle" type="checkbox" onClick={handleClick} />
            <label className='Mobile_Nav_container' for="Mobile_Nav_toggle">
                <div className="Mobile_Nav"></div>
            </label>
            <ul className='Nav_Links'>
                <li className='Nav_Item'><Link onClick={handleClickAway} to='/'>Home</Link></li>
                <li className='Nav_item dropdown'><a href='' aria-haspopup="ture">Projects</a>
                    <ul className='nav_dropdown' aria-label='submenu'>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' to="/#web">Development</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink to='/#graphics' className='dropdown_link'>Graphics</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' to='/#animation'>Animation</NavHashLink></li>
                        <li className='Nav_Item'><NavHashLink className='dropdown_link' smooth to='#arts'>Fine Art</NavHashLink></li>
                    </ul>
                </li>
                <li className='Nav_Item'><NavHashLink to="#contact">Contact Me</NavHashLink></li>
                <li className='Nav_Item'><Link to='/resources'>Resources</Link></li>
            </ul>
        </nav>
    )
};

export default Nav