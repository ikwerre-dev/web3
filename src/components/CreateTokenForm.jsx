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
        { label: 'Solana Mainnet', value: 'SOL' },
        { label: 'Blast', value: 'Blast' },
        { label: 'Base Chain', value: 'BaseChain' },
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
                                    required={1}
                                    label="Name"
                                    value={tokenData.name}
                                    onChange={handleInputChange}
                                    placeholder="Put the name of your Token"
                                    name="name"
                                />
                            </div><div className='col-12 mt-3'>
                                <TextInput
                                    required={1}
                                    label="Decimals"
                                    value={tokenData.decimals}
                                    onChange={handleInputChange}
                                    placeholder="6"
                                    name="decimals"
                                />
                            </div><div className='col-12 mt-3'>
                                <TextInput
                                    required={1}
                                    label="Supply"
                                    value={tokenData.supply}
                                    onChange={handleInputChange}
                                    placeholder="!"
                                    name="supply"
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <SelectInput
                                    required={1}
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
                                    required={1}
                                    label="Symbol"
                                    value={tokenData.symbol}
                                    onChange={handleInputChange}
                                    placeholder="Put the symbol of your Token"
                                    name="symbol"
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <TextArea
                                    required={1}
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
                            required={1}
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
