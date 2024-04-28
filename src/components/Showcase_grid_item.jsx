import React from 'react';
import './Showcase.css';
import ProgressBar from './ProgressBar';

const ShowcaseGridItem = ({
    id,
    backgroundImage,
    ticker,
    tickerCode,
    creationTime,
    progress,
    minSol,
    maxSol,
    saleStartTime,
    onClickView
}) => {
    return (
        <div className="col-sm-3 mb-3">
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
                <p className='mt-2 mb-1'>
                    Progress <span>({progress}%)</span>
                    <ProgressBar progress={progress} />
                    <div className='d-flex mt-2 justify-content-between'>
                        <span>{minSol} SOL</span>
                        <span>{maxSol} SOL</span>
                    </div>
                </p>
                <hr className='mt-2' />
                <div className='row mb-0'>
                    <div className='col-9'>
                        <div className='grid'>
                            <p className='mb-0'>Sale Starts In</p>
                            <p>{saleStartTime}</p>
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
