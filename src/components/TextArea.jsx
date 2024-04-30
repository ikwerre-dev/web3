import React from 'react';

function FileInput({ label, onChange }) {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <textarea name="" className="form-control textarea-lg" onChange={onChange}></textarea>
        </div>
    );
}

export default FileInput;
