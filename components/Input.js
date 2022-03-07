const Input = ({id, name, rate, nominator, callback}) => {

    let value = nominator * rate
    const change = event => {
        value = event.target.value / rate
        callback(value)
    }
    return (
        <label className="input-group" key={id}>
            <span className="w-1/4">{name}</span>
            <input type="number" placeholder={name}
                   className="input input-bordered input-xs w-3/4 max-w-xs"
                   value={value}
                   onChange={change}
                   step={1}
            />
        </label>
    );
};

export default Input;
