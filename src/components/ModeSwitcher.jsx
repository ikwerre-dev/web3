import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { MoonIcon, SunDim } from 'lucide-react'; // Make sure to import your icons correctly

const ModeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for a cookie and set the mode accordingly
    const currentTheme = Cookies.get('theme');
    if (currentTheme === 'dark') {
      setDarkMode(true);
      document.getElementById('main-body').classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.getElementById('main-body').classList.remove('dark');
      Cookies.set('theme', 'light');
    } else {
      document.getElementById('main-body').classList.add('dark');
      Cookies.set('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <li className='mode-switcher'>
      <a className='cursor-pointer' onClick={toggleTheme}>
        {darkMode ? <MoonIcon color="#fff" size={18} className='moon' /> : <SunDim color="#F95192"  className='sun' size={23} />}
        
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </a>
    </li>
  );
};

export default ModeSwitcher;
