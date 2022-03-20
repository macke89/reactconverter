import React from 'react';


const LengthProgressCard = ({nominator, icon, planets}) => {
    return (
        <div tabIndex="0" className="collapse">
            <input type="checkbox" className="peer"/>
            <div
                className="collapse-title bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content">
                <div className="flex items-center">
                    <span>{icon}</span>
                    <span>Planets</span>
                </div>
            </div>
            <div
                className="collapse-content bg-primary text-primary-content peer-checked:bg-base-100 peer-checked:text-secondary-content">
                <div className="w-full flex flex-col gap-5 mb-2 w-full">
                    {planets.map(planet => {
                        return (
                            <div className="text-accent-content">
                                <div>
                                    <span className="uppercase">{planet.name}</span>
                                    <span> - </span>
                                    <span className="uppercase">{planet.circumference} km</span>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <span>{planet.icon}</span>
                                    <progress className="progress progress-primary w-full" value={nominator}
                                              max={planet.circumference}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default LengthProgressCard;
