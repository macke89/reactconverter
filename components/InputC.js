import React from 'react';

const InputC = ({value, onChange, label}) => {
    return (
        <label className="input-group input-group-vertical">
            <span
                className="w-full capitalize hover:cursor-pointer group-focus:bg-red-300 font-semibold py-2 btn-primary transition-all duration-500 hover:text-white">
                {label}
            </span>
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