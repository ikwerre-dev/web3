import React from 'react';
import './Banner.css';
import solana from '../assets/solana.png';
import showcaseData from './functions/useShowcaseData';
import CountdownTimer from './functions/CountdownTimer'
 


function BannerCard() {

  //this hot item part shows the item with hot value
  const hotItems = showcaseData.filter(item => item.hot === 1);
  const item = hotItems.length > 0 ? hotItems[0] : null;


  return (

    <div className='row' >
      <div className='col-12 '>
        <div className="card banner_card shadow pt-4 px-4 pb-1">
          <div className='row'>
            <div className='col-8'>
              <div className='banner-card-avatar'>
                <img src={item.backgroundImage} alt='banner' className='banner-avatar' />
                <img src={solana} alt='banner' className='banner-addon' />
              </div>
            </div>
            <div className='col-4'>
              <div className='badge mx-2'>
                🔥  HOT DROP
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h4>{item.ticker} [ticker: {item.tickerCode}]</h4>
            <p className='text-muted text-m'>Market cap : {item.marketCap}K</p>
          </div>
          <p className='mt-2 fs-6 mb-0'>
            Soft/Hard
          </p>

          <h4 className='text-main banner-amount-text'>
            {item.minSol} <span className='text-dard'>-</span> {item.maxSol} {item.chain}
          </h4>
          <hr className='mt-2' />

          <div className='row mb-0'>
            <div className='col-9'>
              <div className='grid'>
                <p className='mb-0'>Sale Starts In</p>
                <p><CountdownTimer saleStartTime={item.saleStartTime} /></p>
              </div>
            </div>
            <div className='col-3'>
              <a href={'details/' + item.id} className='btn btn-main mt-1 btn-sm'>View</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default BannerCard;
