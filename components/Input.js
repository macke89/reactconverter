import {useState} from "react";

const Input = ({name, rate, nominator, callback}) => {
    const [value, setValue] = useState(nominator * rate);

    const change = event => {
        setValue(event.target.value)
        callback(event.target.value)
    }
    return (
        <label className="input-group">
            <span className="w-1/4">{name}</span>
            <input type="number" placeholder={name}
                   className="input input-bordered w-3/4"
                   value={value}
                   onChange={change}
                   step={1}
            />
        </label>
    );
};

export default Input;
