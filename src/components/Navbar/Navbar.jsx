import React, { useState } from 'react'
import './Navbar.css'
import '@mui/material';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <h3 className='logo'>SP</h3>
                    <ul>
                        <li><a className='menu-item' href="#hero" onClick={(e) => handleScroll(e, 'hero')}>Home</a></li>
                        <li><a className='menu-item' href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
                        <li><a className='menu-item' href="#work-experience" onClick={(e) => handleScroll(e, 'work-experience')}>Work Experience</a></li>
                        <li><a className='menu-item' href="#contact-me" onClick={(e) => handleScroll(e, 'contact-me')}>Contact Me</a></li>
                        <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                    </ul>

                    <button className='menu-btn' onClick={toggleMenu}>
                        <span className={'material-symbols-outlined'} style={{fontSize: "1.8rem"}}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
