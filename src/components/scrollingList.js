import React from 'react';
import './ScrollingList.css'; // Assuming you have a CSS file for styles
import { Zap } from 'lucide-react';

const ScrollingList = () => {
  return (
    <div className="scrolling-container">
      <ul className="scrolling-list">
        <li className='fixed'><span className='text-dark'><Zap color="gold" size={18} /><span className='mx-1'>Trending</span></span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
        <li><span className='text-dark'>#1</span> <span className='text-main'>MEOW</span></li>
      
      </ul>
    </div>
  );
};

export default ScrollingList;
