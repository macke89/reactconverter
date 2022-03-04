import React from 'react';

const Input = ({name, rate, convert, nominator}) => {
    return (
        <label className="input-group">
            <span className="w-1/4">{name}</span>
            <input type="number" placeholder={name}
                   className="input input-bordered w-3/4"
                   value={nominator * rate}
                   onChange={convert}
            />
        </label>
    );
};

export default Input;
