import React from 'react';
import './Showcase.css';
import Showcase_searchbar from './Showcase_searchbar';   
import Showcase_grid from './Showcase_grid';   


function showcase() {
    return (
        <div className="showcase  mt-3">
            <div className='row'>
                <div className='col-11'>
                    <Showcase_searchbar />
                    <Showcase_grid />
                </div>
            </div>

        </div>
    );
}

export default showcase;
