import React, {useEffect, useState} from 'react';

const TimeCounter = ({nominator}) => {
    const times = (nominator) => {
        let arr = []
        arr[0] = nominator
        return arr
    }

    times(nominator)
    return (
        <div>
            <h1>Nominator: {nominator}</h1>
            <p>Weeks: {times[0]}</p>
        </div>
    );
};

export default TimeCounter;
