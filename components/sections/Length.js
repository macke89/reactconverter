import React, {useState} from 'react';
import Input from "../Input";

const lengths = [
    {id: 1, name: "cm", rate: 100000},
    {id: 2, name: "inches", rate: 39370.1},
    {id: 3, name: "foot", rate: 3280.84},
    {id: 4, name: "yard", rate: 1093.61},
    {id: 5, name: "m", rate: 1000},
    {id: 6, name: "miles", rate: 1.60934},
    {id: 7, name: "km", rate: 1},
    {id: 8, name: "nautic mile", rate: 0.539957},
]

const Length = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            {lengths.map(length => (
                <Input
                    key={length.id}
                    name={length.name}
                    rate={length.rate}
                    nominator={nominator}
                    callback={callback}/>
            ))}
        </div>
    );
};

export default Length;
