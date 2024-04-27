import React from 'react';
import './Showcase'; // Assuming you have a CSS file for styles
import {  } from 'lucide-react';
import Showcase_grid_item from './Showcase_grid_item';  // Adjust path if necessary


const showcase_grid_item = () => {
    return (
        <div className="row mt-5">
            <Showcase_grid_item />
            <Showcase_grid_item />
            <Showcase_grid_item />
            <Showcase_grid_item />
            <Showcase_grid_item />
            <Showcase_grid_item />

        </div>
    );
};

export default showcase_grid_item;
