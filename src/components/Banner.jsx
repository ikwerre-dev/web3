import React from 'react';
import './Banner.css';
import BannerCard from './Banner_card';



function Banner() {
  return (
    <div className="banner col-10 offset-1">
      <div className='row'>
        <div className='col-sm-6 banner-left'>
          <div className='banner-text-section'>
            <h3>Dittoswaps: Launchpad Protocol</h3>
            <p>Join in on the fun with many different networks and Launchpad types to choose from. Feel free to browse new listings from Base, Blast, and Solana Network Chains. Our site hosts 3 types of Launchpad, Free-for-all where you can buy/sell, traditional where it is buy only and lastly private that are partner hosted and invite only.</p>
          </div>
          <div className='banner-action-buttons'>
            <a href='/createtoken' className='btn btn-main'>
              Create Token
            </a>

            <button className='btn btn-plain btn-transparent'>
              Learn more
            </button>
          </div>
        </div>
        <div className='col-sm-2'></div>
        <div className='col-sm-4 banner-right'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
}

export default Banner;
