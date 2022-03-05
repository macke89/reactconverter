import React, {useState} from 'react';
import Input from "../Input";

const lengths = [
    {name: "cm", rate: 1},
    {name: "m", rate: 100},
    {name: "km", rate: 100000},
]

const Length = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="form-control w-full flex flex-col gap-5 mb-2">
            <div>Nominator: {nominator}</div>
            {lengths.map((length) => {
                return <Input callback={callback} key={length.name} nominator={nominator} {...length}/>
            })}
        </div>
    );
};

export default Length;
