import React from 'react';
import ProgressBar from "./ProgressBar";
import {AiOutlineMinus} from "react-icons/ai";


const LengthProgressCard = ({nominator, name, icon, items, unit, id}) => {
    return (
        <div key={id} className="shadow-xl p-4 flex-1 text-base-content rounded-sm min-w-[16em]">
            <div className="divider">
                <i>{icon}</i>
                <h3 className="font-bold uppercase text-center">{name}</h3>
            </div>
            <div className="flex flex-col gap-1">
                {items.map(item => {
                    return (
                        <ProgressBar nominator={nominator} {...item} unit={unit}/>
                    )
                })}
            </div>
        </div>
    );
};

export default LengthProgressCard;
