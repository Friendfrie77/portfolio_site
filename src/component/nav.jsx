import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
                        <li className='Nav_Item'><a className='dropdown_link' href='#web'>Development</a></li>
                        <li className='Nav_Item'><a className='dropdown_link' href='#graphics'>Graphics</a></li>
                        <li className='Nav_Item'><a className='dropdown_link' href='#animation'>Animation</a></li>
                        <li className='Nav_Item'><a className='dropdown_link' href='#arts'>Fine Art</a></li>
                    </ul>
                </li>
                <li className='Nav_Item'><Link to='/resources'>Resources</Link></li>
            </ul>
        </nav>
    )
};

export default Nav