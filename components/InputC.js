import React from 'react';

const InputC = ({value, onChange, label}) => {
    return (
        <label className="input-group" key={label}>
            <span className="w-1/4">{label}</span>
            <input type="number" placeholder={label}
                   className="input input-bordered input-xs w-3/4 max-w-xs"
                   value={value}
                   onChange={onChange}
                   step={1}
            />
        </label>
    );
};

export default InputC;
