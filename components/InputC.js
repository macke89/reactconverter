import React from 'react';

const InputC = ({value, onChange, label}) => {
    return (
        <label className="input-group" key={label}>
            <span>{label}</span>
            <input type="number" placeholder={label}
                   className="input input-bordered input max-w-xs"
                   value={value}
                   onChange={onChange}
                   step={1}
            />
        </label>
    );
};

export default InputC;