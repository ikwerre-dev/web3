import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import usFlag from '../assets/us-flag.png';
import cnFlag from '../assets/cn-flag.png';
import { FaTelegramPlane, FacebookIcon } from 'react-icons/fa';
import { AiOutlineFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { PiMoon, PiSunLight } from 'react-icons/pi';
import ModeSwitcher from './ModeSwitcher';

function Footer() {
    return (
        <div className='footer'>
            <div className="top-part">
                <p className="text-center col-sm-10 offset-1 text-muted mt-5">
                    Disclaimer:  will never endorse or encourage that you invest in any of the projects listed and therefore, accept no liability for any loss occasioned. It is the user(s) responsibility
                    to do their own research and seek financial advice from a professional. More information about (DYOR) can be found via Binance Academy.
                </p>
            </div>
            <hr />
            <div className="bottom-part">
                <div className="row offset-1">
                    <div className="col-sm-3">
                        <h6 className='fw-bold'>LOGO</h6>
                    </div>
                    <div className="col-sm-3">
                        <h6 className=''>LANGUAGE</h6>
                        <div className="d-flex flags gap-1">
                            <img src={usFlag} alt="" />
                            <img src={cnFlag} alt="" />

                        </div>
                    </div>
                    <div className="col-sm-3">
                        <h6 className=''>FOLLOW US</h6>
                        <div className="d-flex flags gap-3 text-center">
                            <a href="#"> <FaTelegramPlane size={18} color='#0088CC' /></a>
                            <a href="#"><FaXTwitter className='twitter' size={18} /></a>          
                            <a href="#"><AiOutlineFacebook size={20} color='#1877F2' /></a>

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
        </div>
    );
}

export default Footer;
