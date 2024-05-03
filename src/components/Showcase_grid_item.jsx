import React from 'react';
import './Showcase.css';
import ProgressBar from './ProgressBar';
import CountdownTimer from './functions/CountdownTimer'

const ShowcaseGridItem = ({
    id,
    chain,
    PresaleType,
    presaleProgress,
    backgroundImage,
    ticker,
    tickerCode,
    creationTime,
    progress,
    minSol,
    maxSol,
    marketCap,
    saleStartTime,
    onClickView
}) => {
    return (
        <div className="col-sm-4 mb-3 showcase-filter" data-chain={chain} data-presaleType={PresaleType} data-presaleProgress={presaleProgress}>
            <div className="col-sm-12 showcase_card shadow pt-3 px-4 pb-1">
                <div className='row'>
                    <div className='col-12 topbg-bar' style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '10rem'
                    }}>
                    </div>
                </div>
                <div className='mt-4'>
                    <h6 className='fw-bold m-0'>{ticker} [ticker: {tickerCode}]</h6>
                    <span className='mt-0'>Created {creationTime} ago</span>
                </div>
                <p className='mt-2 mb-2'>
                    Progress <span>({progress}%)</span>
                    <ProgressBar progress={progress} />
                    <div className='d-flex mt-2 justify-content-between'>
                        <span>{minSol} SOL</span>
                        <span>{maxSol} SOL</span>
                    </div>
                </p>
                <p className="pink mt-2 fw-8">Market cap: {marketCap}</p>
                <hr className='mt-0' />
                <div className='row mt-0 mb-0'>
                    <div className='col-9'>
                        <div className='grid'>
                            <p className='mb-0'>Sale Ends In</p>
                            <p> <CountdownTimer saleStartTime={saleStartTime} /></p>
                        </div>
                    </div>
                    <div className='col-3'>
                        <a href={'details/' + id} className='btn btn-main mt-1 btn-sm'>View</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseGridItem;
