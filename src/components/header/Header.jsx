import React from 'react';
import './header.css';
import CTA from "./CTA";
import ME from "../../assets/avatar.jpg"

const Header = () => {
    return (
        <header>
            <div className='conatiner header__container'>
                <h5>Hello I'm</h5>
                <h1>Sina Saeedifar</h1>
                <h5 className='text-light'>Front-End Developer</h5>
                <CTA />
                <div className='me'>
                    <img src={ME} alt='profile' />
                </div>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>)
}

export default Header