import React, {useState} from 'react';
import Input from "../Input";

const lengths = [
    {name: "cm", rate: 100000},
    {name: "inches", rate: 39370.1},
    {name: "foot", rate: 3280.84},
    {name: "yard", rate: 1093.61},
    {name: "m", rate: 1000},
    {name: "miles", rate: 1.60934},
    {name: "km", rate: 1},
    {name: "nautic mile", rate: 0.539957},
]

const Length = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            {lengths.map(length => (
                <Input key={length.name} name={length.name} rate={length.rate} nominator={nominator}
                       callback={callback}/>
            ))}
        </div>
    );
};

export default Length;
