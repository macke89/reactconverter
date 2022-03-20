import React from 'react';

const ProgressBar = ({nominator, name, id, circumference, icon}) => {
    console.log(name);
    return (
        <div className="text-accent-content" key={id}>
            <div>
                <span className="uppercase">{name}</span>
                <span> - </span>
                <span className="uppercase">{circumference} km</span>
            </div>
            <div className="flex gap-4 items-center">
                <span>{icon}</span>
                <progress className="progress progress-primary w-full" value={nominator}
                          max={circumference}/>
            </div>
        </div>
    );
};

export default ProgressBar;
