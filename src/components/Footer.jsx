import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import usFlag from '../assets/us-flag.png';
import cnFlag from '../assets/cn-flag.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
// import { PiMoon, PiSunLight } from 'react-icons/pi';
import ModeSwitcher from './ModeSwitcher';

function Footer() {
    return (
        <div className='footer'>
          
            <div className="top-part">
                <div className="row offset-1">
                    <div className="col-sm-3">
                        <h6 className='fw-bold'>
                            <img src={logo} alt="logo" className="logo" />
                        </h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 className=''>LANGUAGE</h6>
                        <div className="d-flex flags gap-1">
                            <img src={usFlag} alt="language" />
                            <img src={cnFlag} alt="language" />

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h6 className=''>FOLLOW US</h6>
                        <div className="d-flex flags gap-3 text-center">
                            <a href="https://telegram.com/"> <FaTelegramPlane size={18} color='#0088CC' /></a>
                            <a href="https://x.com/"><FaXTwitter className='twitter' size={18} /></a>          
                            <a href="https://facebook.com/"><AiOutlineFacebook size={20} color='#1877F2' /></a>

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h6>INTERFACE</h6>
                        <ul className='p-0'>
                        <ModeSwitcher />

                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-part">
                <p className="text-center">© 2024 by Dittopad</p>
            </div>
        </div>
    );
}

export default Footer;
