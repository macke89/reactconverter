import React, {useState} from 'react';
import Input from "../Input";

const weights = [
    {id: 1, name: "g", rate: 1000000},
    {id: 2, name: "ounce", rate: 35274},
    {id: 3, name: "kg", rate: 1000},
    {id: 4, name: "stone", rate: 2204.62},
    {id: 5, name: "stone", rate: 157.473},
    {id: 6, name: "us ton", rate: 1.10231},
    {id: 7, name: "tonne", rate: 1},
    {id: 8, name: "imperial ton", rate: 0.984207},
]

const Weights = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            {weights.map(weight => (
                <Input
                    key={weight.id}
                    name={weight.name}
                    rate={weight.rate}
                    nominator={nominator}
                    callback={callback}/>
            ))}
        </div>
    );
};

export default Weights;
