import React from 'react';
import ProgressBar from "./ProgressBar";
import {AiOutlineMinus} from "react-icons/ai";


const LengthProgressCard = ({nominator, name, icon, items, unit}) => {
    return (
        <>
            <div className="shadow-xl p-4 flex-1 text-base-content rounded-sm">
                <div className="divider">
                    <i>{icon}</i>
                    <h3 className="font-bold uppercase text-center">{name}</h3>
                </div>
                <div className="flex flex-col gap-1">
                    {items.map(item => {
                        console.log(item);
                        return (
                            <ProgressBar nominator={nominator} {...item} unit={unit}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default LengthProgressCard;
