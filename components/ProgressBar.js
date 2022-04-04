import React from 'react';

const ProgressBar = ({nominator, name, value, icon, unit, id}) => {
    return (
        <div className="text-xs odd:text-neutral odd:bg-neutral-content rounded-sm p-1">
            <div>
                <span className="uppercase font-bold">{name}</span>
                <span> - </span>
                <span className="italic">{value}</span>
                <span> {unit}</span>
            </div>
            <div className="flex gap-4 items-center">
                {/*<span>{icon}</span>*/}
                <progress className="progress progress-accent w-full"
                          value={nominator}
                          max={value}/>
            </div>
        </div>
    );
};

export default ProgressBar;
