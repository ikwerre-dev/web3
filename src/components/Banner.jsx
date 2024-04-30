import React from 'react';
import './Banner.css';
import Banner_card from './Banner_card';   
import HeaderButton from './HeaderButton';



function Banner() {
  return (
    <div className="banner col-11 offset-1">
      <div className='row'>
        <div className='col-sm-6 banner-left'>
          <div className='banner-text-section'>
            <h3>Launchpad Protocol that change everything</h3>
            <p>Introducing Swap, the revolutionary exchange platform that empowers users to seamlessly switch between different blockchain networks with ease and efficiency. With Swap, navigating the complexities of cross-chain transactions has never been simpler.</p>
          </div>
          <div className='banner-action-buttons'>
            <HeaderButton />

            <button className='btn btn-plain btn-transparent'>
              Learn more
            </button>
          </div>
        </div>
        <div className='col-sm-1'></div>
        <div className='col-sm-4 banner-right'>
          <Banner_card />
        </div>
      </div>
    </div>
  );
}

export default Banner;
