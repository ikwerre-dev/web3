import React from 'react';
import './Showcase'; // Assuming you have a CSS file for styles
import { List, Grid2X2, } from 'lucide-react';
import { createPopper } from '@popperjs/core';

const ShowcaseSearchbar = () => {
    return (
        <div className="row mt-5 showcase_searchbar offset-1">
            <div className='col-sm-5'>
                <input className='form-control shadow-custom' placeholder='Type token symbol, address to find your launchpad' />
            </div>
            <div className='col-sm-12 col-lg-7 menulist'>
                <div className="btn-group">
                    <button type="button" className="btn btn-white shadow-custom dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Chains
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-white shadow-custom dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Presale Type
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-white shadow-custom dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Presale Progress
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-white shadow-custom dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Price low to high
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-white last-btn shadow-custom">
                        <Grid2X2 />
                        <List />                    </button>
                </div>

            </div>

        </div>
    );
};

export default ShowcaseSearchbar;
