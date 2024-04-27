import React from 'react';
import './Showcase.css';
import Showcase_searchbar from './Showcase_searchbar';  // Adjust path if necessary
import Showcase_grid from './Showcase_grid';  // Adjust path if necessary


function showcase() {
    return (
        <div className="showcase  mt-3">
            <div className='row'>
                <div className='col-10 offset-1'>
                    <Showcase_searchbar />
                    <Showcase_grid />
                </div>
            </div>

        </div>
    );
}

export default showcase;
