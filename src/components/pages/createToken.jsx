import React from 'react';
import '../../App.css'
import '../Details.css'
import Header from '../Header';
import Footer from '../Footer';
import CreateTokenForm from '../CreateTokenForm';
function CreateToken() {
    
    return (
        <div className='CreateToken'>
            <Header />
            <div className="row p-5">
                <div className="col-sm-10 offset-1">
                    <CreateTokenForm />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateToken;

