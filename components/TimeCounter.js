import React from 'react';

const times = (nominator) => {
    let arr = []

    let weeks = 0
    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0

    weeks = Math.floor(nominator)
    days = Math.floor((nominator % 1) * 7)
    hours = Math.floor((((nominator % 1) * 7) % 1) * 24)
    minutes = Math.floor((((((nominator % 1) * 7) % 1) * 24) % 1) * 60)
    seconds = Math.floor((((((((nominator % 1) * 7) % 1) * 24) % 1) * 60) % 1) * 60)

    arr[0] = weeks
    arr[1] = days
    arr[2] = hours
    arr[3] = minutes
    arr[4] = seconds
    return arr
}

const TimeCounter = ({nominator}) => {
    let variables = times(nominator)
    return (
        <>
            <div className="stats stats-horizontal lg:stats-horizontal shadow m-4 shadow-xl">
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
        </>
    );
};

export default TimeCounter;

