import React from 'react';

const InputC = ({name, value, callback}) => {
    const change = event => {
        value = event.target.value
        callback(value)
    }
    return (
        <label className="input-group" key={id}>
            <span className="w-1/4">{name}</span>
            <input type="number" placeholder={name}
                   className="input input-bordered input-xs w-3/4 max-w-xs"
                   value={value}
                   onChange={callback}
                   step={1}
            />
        </label>
    );
};

export default InputC;
