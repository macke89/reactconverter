import React from 'react';

const times = (nominator) => {
    let arr = []
    console.log(nominator % 1);

    let weeks = Math.floor(nominator)
    let days = ((nominator % 1) * 7) % 1

    arr[0] = weeks
    arr[1] = days
    arr[2] = 2
    arr[3] = 2
    arr[4] = 2
    return arr
}

const TimeCounter = ({nominator}) => {
    let variables = times(nominator)
    return (
        <div className="stats stats-horizontal lg:stats-horizontal shadow">
            <p>{nominator}</p>
            <div className="stat text-center">
                <div className="stat-title">Weeks</div>
                <div className="stat-value">{variables[0]}</div>
            </div>

            <div className="stat text-center">
                <div className="stat-title">days</div>
                <div className="stat-value">{variables[1]}</div>
            </div>

            <div className="stat text-center">
                <div className="stat-title">hours</div>
                <div className="stat-value">{variables[2]}</div>
            </div>

            <div className="stat text-center">
                <div className="stat-title">minutes</div>
                <div className="stat-value">{variables[3]}</div>
            </div>

            <div className="stat text-center">
                <div className="stat-title">seconds</div>
                <div className="stat-value">{variables[4]}</div>
            </div>

        </div>
    );
};

export default TimeCounter;
