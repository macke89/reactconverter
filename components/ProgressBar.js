import React from 'react';

const ProgressBar = ({nominator, name, id, value, icon}) => {
    console.log(name);
    return (
        <div className="text-accent-content text-xs odd:bg-secondary rounded p-1" key={id}>
            <div>
                <span className="uppercase font-bold">{name}</span>
                <span> - </span>
                <span className="italic">{value}</span>
                <span> KM</span>
            </div>
            <div className="flex gap-4 items-center">
                <span>{icon}</span>
                <progress className="progress progress-primary w-full" value={nominator}
                          max={value}/>
            </div>
        </div>
    );
};

export default ProgressBar;
