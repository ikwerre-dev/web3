import React from 'react';
import './Showcase.css'; // Ensure this path is correct
import solana from '../assets/solana.png';  // Assuming this is used somewhere else or remove if unused
import bannerAvatar from '../assets/banner-avatar.png';
import ProgressBar from './ProgressBar';


{/* Example: 60% filled */ }


const Showcase_grid_item = () => {
    return (
        <div className="col-sm-3">
            <div className="col-sm-12 showcase_card shadow pt-3 px-4 pb-1">
                <div className='row'>
                    <div className='col-12 topbg-bar' style={{
                        backgroundImage: `url(${bannerAvatar})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '10rem'
                    }}>
                    </div>
                </div>
                <div className='mt-4'>
                    <h6 className='fw-bold m-0'>IranMan [ticker: IRAN]</h6>
                    <span className=' mt-0'>Created 5h ago</span>
                </div>
                <p className='mt-2 mb-1'>
                    Progress <span>(0.64%)</span>
                    <ProgressBar progress={60} />
                    <div className='d-flex mt-2 justify-content-between'>
                        <span>2.56 SOL</span>
                        <span>400 SOL</span>
                    </div>
                </p>

                <hr className='mt-2' />
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
    );
};

export default Showcase_grid_item;
