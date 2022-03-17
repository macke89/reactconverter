import React from 'react';

const times = (nominator) => {
    let arr = []
    arr[0] = nominator
    arr[1] = 2
    arr[2] = 2
    arr[3] = 2
    arr[4] = 2
    return arr
}

const TimeCounter = ({nominator}) => {
    let variables = times(nominator)
    return (
        <div>
            <h1>Nominator: {nominator}</h1>
            <div>{variables[0]} weeks</div>
            <div>{variables[1]} days</div>
            <div>{variables[2]} hours</div>
            <div>{variables[3]} minutes</div>
            <div>{variables[4]} seconds</div>
        </div>
    );
};

export default TimeCounter;
