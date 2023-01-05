import React from 'react';

const InputC = ({value, onChange, label}) => {
    const handleFocus = (event) => event.target.select();

    return (
        <label className="input-group input-group-vertical items-center">
            <span
                className="w-56 capitalize hover:cursor-pointer group-focus:bg-red-300 font-semibold py-2 btn-primary transition-all duration-500 hover:text-white">
                {label}
            </span>
            <input type="number"
                   placeholder={label}
                   className="w-56 input input-bordered input max-w-xs"
                   value={value}
                   onChange={onChange}
                   step={1}
                   onFocus={handleFocus}
            />
        </label>
    );
};

export default InputC;