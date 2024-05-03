import React from 'react';
import './Showcase';
import { List, Grid2X2 } from 'lucide-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NetworksOption from './functions/FetchNetworks';
import PresaleTypeOption from './functions/PresaleType';
import PresaleProgressOption from './functions/PresaleProgress';
import PriceOption from './functions/PriceOption';

const ShowcaseSearchbar = () => {

    const filterShowcase = (value, type) => {
        console.log(type + ':' + value);

        if (value == '') {
            const showcaseFilters = document.querySelectorAll('.showcase-filter');
            showcaseFilters.forEach(filter => filter.style.display = 'block');
        } else {
            // Hide all elements with class 'showcase-filter'
            const showcaseFilters = document.querySelectorAll('.showcase-filter');
            showcaseFilters.forEach(filter => filter.style.display = 'block');
            // Hide all elements with class 'showcase-filter'

            showcaseFilters.forEach(filter => filter.style.display = 'none');

            // Show elements with data attribute matching the selected value for the given type
            const filteredShowcaseFilters = document.querySelectorAll(`.showcase-filter[data-${type}="${value}"]`);
            filteredShowcaseFilters.forEach(filter => filter.style.display = 'block');
        }
    };
    const filterShowcasePrice = (value) => {
        const completediv = document.querySelector('.showcase-filter-box');
        const items = Array.from(completediv.querySelectorAll('.showcase-filter'));

        // Sort items based on their price attribute in descending order
        items.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            if (value == 2) {
                return priceB - priceA; // Sort in descending order
            } else {
                return priceA - priceB; // Sort in ascending order
            }
        });

        // Clear completediv before reattaching sorted items
        completediv.innerHTML = '';

        // Reattach sorted items to completediv
        items.forEach(item => completediv.appendChild(item));
    };

    return (
        <div className="row mt-5 showcase_searchbar offset-1">
            <div className='col-sm-5'>
                <input className='form-control shadow-custom' placeholder='Type token symbol, address to find your launchpad' />
            </div>
            <div className='col-sm-12 col-lg-7 menulist'>
                <Dropdown as={DropdownButton} title="Chains" variant="white shadow-custom">
                    <Dropdown.Item key={''} onClick={() => filterShowcase('', 'chain')}>
                        All
                    </Dropdown.Item>
                    {NetworksOption.map((network, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(network.value, 'chain')}>
                            {network.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Presale Type" variant="white shadow-custom" className="btn-group">
                    <Dropdown.Item key={''} onClick={() => filterShowcase('', 'presaleType')}>
                        All
                    </Dropdown.Item>
                    {PresaleTypeOption.map((type, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(type.value, 'presaleType')}>
                            {type.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Presale Progress" variant="white shadow-custom" className="btn-group">
                    <Dropdown.Item key={''} onClick={() => filterShowcase('', 'presaleProgress')}>
                        All
                    </Dropdown.Item>
                    {PresaleProgressOption.map((progress, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(progress.value, 'presaleProgress')}>
                            {progress.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Price" variant="white shadow-custom" className="btn-group">
                    {PriceOption.map((price, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcasePrice(price.value)}>
                            {price.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <button type="button" className="btn btn-white last-btn shadow-custom">
                    <Grid2X2 />
                    <List />
                </button>
            </div>
        </div>

    );
};

export default ShowcaseSearchbar;
