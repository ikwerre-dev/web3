import React, { useState } from 'react';
import TextInput from './TextInput';
import FileInput from './FileInput';
import SelectInput from './SelectInput';
import TextArea from './TextArea';

function CreateTokenForm() {
    const [tokenData, setTokenData] = useState({
        name: '',
        symbol: '',
        decimals: '',
        description: '',
        supply: '',
        network: 'SOL',
        image: null,
        twitter: '',
        telegram: '',
        discord: ''
    });

    const handleInputChange = (e) => {
        setTokenData({ ...tokenData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setTokenData({ ...tokenData, image: e.target.files[0] });
    };

    const networks = [
        { label: 'SOL', value: 'SOL' },
        // Add more network options here
    ];

    return (
        <div>
            <h6 className='text-center mb-5'>Creating a token, became a whole lot easier</h6>
            <form>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className='col-12 mt-3'>
                                <TextInput
                                    label="Name"
                                    value={tokenData.name}
                                    onChange={handleInputChange}
                                    placeholder="Put the name of your Token"
                                    name="name"
                                />
                            </div><div className='col-12 mt-3'>
                                <TextInput
                                    label="Decimals"
                                    value={tokenData.decimals}
                                    onChange={handleInputChange}
                                    placeholder="6"
                                    name="decimals"
                                />
                            </div><div className='col-12 mt-3'>
                                <TextInput
                                    label="Supply"
                                    value={tokenData.supply}
                                    onChange={handleInputChange}
                                    placeholder="!"
                                    name="supply"
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <SelectInput
                                    label="Network"
                                    options={networks}
                                    value={tokenData.network}
                                    onChange={handleInputChange}
                                    name="network"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">

                            <div className='col-12 mt-3'>

                                <TextInput
                                    label="Symbol"
                                    value={tokenData.symbol}
                                    onChange={handleInputChange}
                                    placeholder="Put the symbol of your Token"
                                    name="symbol"
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <TextArea
                                    label="Description"
                                    value={tokenData.description}
                                    onChange={handleInputChange}
                                    placeholder="Put the description of your token"
                                    name="description"
                                />
                            </div>
                        </div>
                    </div>

                    <div className='col-12 mt-3'>
                        <FileInput
                            label="Image"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='col-4 mt-3'>
                        <TextInput
                            label="Twitter"
                            value={tokenData.twitter}
                            onChange={handleInputChange}
                            placeholder="Twitter link"
                            name="twitter"
                        />
                    </div><div className='col-4 mt-3'>
                        <TextInput
                            label="Telegram"
                            value={tokenData.telegram}
                            onChange={handleInputChange}
                            placeholder="Telegram link"
                            name="telegram"
                        />
                    </div><div className='col-4 mt-3'>
                        <TextInput
                            label="Discord"
                            value={tokenData.discord}
                            onChange={handleInputChange}
                            placeholder="Discord link"
                            name="discord"
                        />
                    </div>
                </div>
                <div className="col-12 mt-5 d-flex justify-content-center">

                    <button type="submit" className="btn btn-main">Create Token</button>
                </div>
            </form>
        </div>
    );
}

export default CreateTokenForm;
