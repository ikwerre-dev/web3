import React from 'react';
import ProgressBar from './ProgressBar';
import { PiCaretDoubleDown } from 'react-icons/pi';
import bannerAvatar from '../assets/banner-avatar.png';
import data from  './functions/TokenDetails';
 


function DetailsCard({ id }) {

    const details = data[id];

    if (!details) {
        return <p>Data not found for this ID.</p>;
    }

    return (
        <div className='row'>
            <div className='col-12 '>
                <div className="card DetailsCard pt-4 px-4 pb-1">
                    <div className='row mb-0'>
                        <div className='col-4 mb-0'>
                            <div className='banner-card-avatar'>
                                <img src={details.projectDetails.backgroundImage} alt={'banner card'} className='banner-avatar' />
                            </div>
                        </div>
                        <div className='col-8 mb-0'>
                            <h4>{details.projectDetails.name}</h4>
                            <p className='text-muted text-m'>{details.projectDetails.description}</p>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <ProgressBar progress={details.projectDetails.progressBarInitial} />
                    </div>
                    <div className='mt-2'>
                        <p>Bonding curve progress: {details.projectDetails.progressBarInitial}%</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                        <h6>{details.projectDetails.amountLabel}</h6>
                        <div className='d-flex gap-1'>
                            <a href='/' className='btn btn-main mt-1 btn-sm'>{details.projectDetails.buyLabel}</a>
                            <a href='/' className='btn btn-secondary mt-1 btn-sm'>{details.projectDetails.sellLabel}</a>
                        </div>
                    </div>
                    <input type="number" name="" className='mt-2 form-control bordered' id="" />
                    <div className="col-6 mb-2">
                        <a href='/createtoken' className='btn btn-main mt-3 btn-lg'>{details.projectDetails.tradeButtonLabel}</a>
                    </div>
                </div>
            </div>
            <div className='col-12 mt-3'>
                <div className="card DetailsCard pt-3 px-4 pb-1">
                    <div className='row mb-0'>
                        <p className="text-center"><PiCaretDoubleDown className='pink' /></p>
                        <div className='mt-0 mb-2'>
                            <ProgressBar progress={details.bondCurveInfo.progress} />
                        </div>
                        <div className='mb-0 mt-2'>
                            <p>{details.bondCurveInfo.marketCapMessage}</p>
                            <p>
                                TELEGRAM: <a href={details.bondCurveInfo.telegramLink} className='text-main-muted'>{details.bondCurveInfo.telegramLink}</a>
                                <br />
                                TWITTER: <a href={details.bondCurveInfo.twitterLink} className='text-main-muted'>{details.bondCurveInfo.twitterLink}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 mt-3'>
                <div className="card DetailsCard pt-3 px-4 pb-1">
                    <div className='row mb-0'>
                        <h5 className='fw-bold'>Holder distribution</h5>
                        {details.holdersData.map((holder, index) => (
                            <div className="col-12 row" key={index}>
                                <div className="col-8">
                                    <p>{holder.holderName}</p>
                                </div>
                                <div className="col-4">
                                    <p>{holder.holderShare}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsCard;
