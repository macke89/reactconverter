import React, {useState} from 'react';
import Input from "../Input";

const weights = [
    {name: "g", rate: 1000000},
    {name: "ounce", rate: 35274},
    {name: "kg", rate: 1000},
    {name: "stone", rate: 2204.62},
    {name: "stone", rate: 157.473},
    {name: "us ton", rate: 1.10231},
    {name: "tonne", rate: 1},
    {name: "imperial ton", rate: 0.984207},
]

const Weights = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            {weights.map(weight => (
                <Input key={weight.name} name={weight.name} rate={weight.rate} nominator={nominator}
                       callback={callback}/>
            ))}
        </div>
    );
};

export default Weights;
