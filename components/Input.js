const Input = ({id, name, rate, nominator, callback}) => {

    function checkValue(nominator) {
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
            <input
                type="number"
                placeholder={name}
                className="input input-bordered input font-semibold"
                value={checkValue(nominator)}
                onChange={handleChange}
                step={1}
                onFocus={handleFocus}
            />
            <span className="w-full capitalize">{name}</span>
        </label>
    );
};

export default Input;
