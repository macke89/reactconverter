import React, {useState} from 'react';
import Input from "../Input";
import InputC from "../InputC";

const temperatures = [
    {name: "fahrenheit", rate: 1},
    {name: "celsuis", rate: 100},
    {name: "kelvin", rate: 100},
]

const Temperatures = () => {
    const [nominator, setNominator] = useState(2);

    function callback(nominator) {
        setNominator(nominator)
    }

    function calcF(nominator) {
        return nominator;
    }

    function calcC(nominator) {
        return nominator * 2;
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            <Input name="fahrenheit" value={calcF(nominator)} callback={callback}/>
            <Input name="fahrenheit" value={calcF(nominator)} callback={callback}/>
        </div>
    );
};

export default Temperatures;
