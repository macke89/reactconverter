import React from 'react';
import ProgressBar from "./ProgressBar";
import {AiOutlineMinus} from "react-icons/ai";


const LengthProgressCard = ({nominator, icon, planets}) => {
    return (
        <div tabIndex="0" className="collapse">
            <input type="checkbox" className="peer"/>
            <div
                className="collapse-title bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content">
                <div className="flex gap-2">
                    <span>{icon}</span>
                    <span className="text-2xl font-bold">Planets</span>
                </div>
            </div>
            <div
                className="collapse-content bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-primary-content">
                <div className="w-full flex flex-col gap-5 mb-2 w-full">
                    {planets.map(planet => {
                        console.log(planet);
                        return (
                            <ProgressBar nominator={nominator} {...planet}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LengthProgressCard;
