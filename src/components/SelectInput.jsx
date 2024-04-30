import React from 'react';

function SelectInput({ label, options, value, onChange }) {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <select className="form-control" value={value} onChange={onChange}>
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
