import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { SunDim } from 'lucide-react';

function Header() {
    return (
        <header>
            <div className='first-header-part'>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>

            <div className='search-bar'>
                <input
                    type='search'
                    className='search-input'
                    placeholder='Type token symbol, address to find your launchpad'
                    aria-label='Search launchpad'
                />
            </div>

            </div>
            <div className='nav'>
                <ul>
                    <li>
                        <a href='#'>
                            Telegram
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            Support
                        </a>
                    </li>
                    <li className='mode-switcher'>
                        <a href='javascript:void(0)'
                        >
                         <SunDim color="#F95192" size={23} />

                            Light Mode
                        </a>
                    </li>
                    <li className='header-btn'>
                        <button className='btn btn-main'>
                            Connect Wallet
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
