const Input = ({name, rate, nominator, callback}) => {

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
        <label className="input-group">
                <span
                    className="w-36 capitalize hover:cursor-pointer group-focus:bg-red-300 font-semibold py-2 btn-primary transition-all duration-500 hover:text-white">
                    {name}
                </span>
            <input
                type="number"
                placeholder={name}
                className="input input-bordered input font-semibold"
                value={checkValue(nominator)}
                onChange={handleChange}
                step={1}
                onFocus={handleFocus}/>
        </label>
    );
};

export default Input;
