import React from 'react';
import './Showcase.css';
import ShowcaseSearchbar from './Showcase_searchbar';   
import ShowcaseGrid from './Showcase_grid';   


function showcase() {
    return (
        <div className="showcase  mt-3">
            <div className='row'>
                <div className='col-11'>
                    <ShowcaseSearchbar />
                    <ShowcaseGrid />
                </div>
            </div>

        </div>
    );
}

export default showcase;
