import React from 'react';

function FileInput({ required, label, onChange }) {
    return (
        <div className="form-group">
            {label && <label>{label} {required === 1 ? <span className='pink'>*</span> : ''}</label>}

            <textarea name="" {...(required === 1 ? { required: true } : {})} className="form-control textarea-lg" onChange={onChange}></textarea>
        </div>
    );
}

export default FileInput;
