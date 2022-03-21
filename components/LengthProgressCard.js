import React from 'react';
import ProgressBar from "./ProgressBar";
import {AiOutlineMinus} from "react-icons/ai";


const LengthProgressCard = ({nominator, name, icon, items}) => {
    return (
        <>
            <div className="shadow-xl p-4">
                <div className="divider">
                    <i>{icon}</i>
                    <h3 className="font-bold uppercase">{name}</h3>
                </div>
                <div className="flex flex-col gap-1">
                    {items.map(item => {
                        console.log(item);
                        return (<ProgressBar
                            nominator={nominator} {...item}/>)
                    })}
                </div>
            </div>
        </>
    );
};

export default LengthProgressCard;
