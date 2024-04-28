import React from 'react';
import './Header.css';
import ModeSwitcher from './ModeSwitcher'; // adjust the path according to your file structure
import logo from '../assets/logo.png';
import { SunDim } from 'lucide-react';
import HeaderButton from './HeaderButton';

function Header() {
    return (
        <header>
            <div className='first-header-part'>
            <div className='logo'>
                <a href="/"><img src={logo} alt='Logo' /></a>
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
                    <ModeSwitcher />
                    <HeaderButton />
                </ul>
            </div>
        </header>
    );
}

export default Header;
