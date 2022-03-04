import React, {useState} from 'react';
import Input from "../Input";

const lengths = [
    {name: "cm", rate: 1},
    {name: "m", rate: 100},
    {name: "km", rate: 100000},
]

const Length = () => {
    const [nominator, setNominator] = useState(1);

    function convert(factor) {
        setNominator(factor)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            {nominator}
            {lengths.map((length) => {
                return <Input key={length.name} nominator={nominator} {...length} convert={convert}/>
            })}
        </div>
    );
};

export default Length;
