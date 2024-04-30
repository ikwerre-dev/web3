import React from 'react';
import './input.css';

function TextInput({ label, value, onChange, placeholder, type = 'text' }) {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input
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
