import React from 'react';
import './input.css';

function TextInput({ required, label, value, onChange, placeholder, type = 'text' }) {
    return (
        <div className="form-group">
            {label && <label>{label} {required === 1 ? <span className='pink'>*</span> : ''}</label>}
            <input
                {...(required === 1 ? { required: true } : {})}
                type={type}
                className="form-control"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

        </div>
    );
}

export default TextInput;
