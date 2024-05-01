import React from 'react';
import './ScrollingList.css';
import { Zap } from 'lucide-react';

const ScrollingList = ({ items }) => {
  return (
    <div className="scrolling-container">
      <li className='fixed'>
        <span className='text-light text-main-light'>
          <Zap color="gold" size={18} />
          <span className='mx-1'>Trending</span>
        </span>
      </li>
      <ul className="scrolling-list">
        {items.map((item, index) => (
          <li key={item.id} className='cursor-pointer' style={{ whiteSpace: 'nowrap' }}>
            <a href={`/details/${item.id}`}>
              <span className='text-dark text-main-dark mx-1'>#{index + 1}</span>
              <span className='text-main'>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollingList;
