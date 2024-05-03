import React from 'react';

function SelectInput({ required, select, label, options, value, onChange }) {
    return (
        <div className="form-group">
            {label && <label>{label} {required === 1 ? <span className='pink'>*</span> : ''}</label>}
            <select className="form-control" {...(required === 1 ? { required: true } : {})} value={value} onChange={onChange}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;
