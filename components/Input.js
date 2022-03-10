const Input = ({id, name, rate, nominator, callback}) => {

    function checkValue(nominator) {
        // DONE Fix this
        let newValue = (nominator * rate).toFixed(2)
        if (newValue.toString().includes(".00") === true) {
            return parseFloat(newValue).toFixed(0)
        }
        return newValue
    }

    const handleChange = event => {
        let value = event.target.value / rate
        callback(value)
    }
    const handleFocus = (event) => event.target.select();

    return (
        <label className="input-group" key={id}>
            <span className="w-1/4">{name}</span>
            <input
                type="number"
                placeholder={name}
                className="input input-bordered input w-3/4 max-w-xs"
                value={checkValue(nominator)}
                onChange={handleChange}
                step={1}
                onFocus={handleFocus}
            />
        </label>
    );
};

export default Input;
