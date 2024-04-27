import React from 'react';
import './Banner.css';
import solana from '../assets/solana.png';
import bannerAvatar from '../assets/banner-avatar.png';


function Banner_card() {
  return (
   <div className='row'>
    <div className='col-12 '>
    <div className="card banner_card shadow pt-4 px-4 pb-1">
      <div className='row'>
        <div className='col-8'>
            <div className='banner-card-avatar'>
                <img src={bannerAvatar} className='banner-avatar' />
                <img src={solana} className='banner-addon' />
            </div>
        </div>
        <div className='col-4'>
            <div className='badge mx-2'>
            🔥  HOT DROP
            </div>
        </div>
      </div>
      <div className='mt-4'>
        <h4>IranMan [ticker: IRAN]</h4>
        <p className='text-muted'>Market cap : 34.4K</p>
      </div>
      <p className='mt-2 fs-6 mb-0'>
      Soft/Hard
      </p>

      <h4 className='text-main banner-amount-text'>
      35,000 <span className='text-dard'>-</span> 140,000 SOL
      </h4>
      <hr className='mt-2'/>
    
    <div className='row mb-0'>
        <div className='col-9'>
            <div className='grid'>
            <p className='mb-0'>Sale Starts In</p>
            <p>07:13:56:36</p>
            </div>
        </div>
        <div className='col-3'>
            <button className='btn btn-main mt-1 btn-sm'>View</button>
        </div>
    </div>
    </div>
    </div>
   </div>
  );
}

export default Banner_card;
