import React from 'react';
import './Showcase';
import { List, Grid2X2 } from 'lucide-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import NetworksOption from './functions/FetchNetworks';
import PresaleTypeOption from './functions/PresaleType';
import PresaleProgressOption from './functions/PresaleProgress';
import PriceOption from './functions/PriceOption';

const ShowcaseSearchbar = () => {
   
    const filterShowcase = (type) =>{
        alert(type);
    };

    return (
        <div className="row mt-5 showcase_searchbar offset-1">
            <div className='col-sm-5'>
                <input className='form-control shadow-custom' placeholder='Type token symbol, address to find your launchpad' />
            </div>
            <div className='col-sm-12 col-lg-7 menulist'>
                <Dropdown as={DropdownButton} title="Chains" variant="white shadow-custom">
                    {NetworksOption.map((network, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(network.value)}>
                        {network.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Presale Type" variant="white shadow-custom" className="btn-group">
                    {PresaleTypeOption.map((type, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(type.label)}>
                            {type.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Presale Progress" variant="white shadow-custom" className="btn-group">
                    {PresaleProgressOption.map((progress, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(progress.label)}>
                            {progress.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown>

                <Dropdown as={DropdownButton} title="Price low to high" variant="white shadow-custom" className="btn-group">
                    {PriceOption.map((price, index) => (
                        <Dropdown.Item key={index} onClick={() => filterShowcase(price.label)}>
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
