import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";
import LengthProgressCard from "../components/LengthProgressCard";
import {GiEarthAfricaEurope, GiPlanetCore, GiRingedPlanet} from "react-icons/gi";

const iconSize = 15;

const lengths = [
    {id: 1, name: "cm", rate: 100000},
    {id: 2, name: "inches", rate: 39370.1},
    {id: 3, name: "foot", rate: 3280.84},
    {id: 4, name: "yard", rate: 1093.61},
    {id: 5, name: "meter", rate: 1000},
    {id: 6, name: "km", rate: 1},
    {id: 7, name: "miles", rate: 0.621371},
    {id: 8, name: "nautic mile", rate: 0.539957},
]

const planets = [
    {id: 1, name: "mercury", value: 15329, icon: <GiPlanetCore size={iconSize}/>},
    {id: 2, name: "mars", value: 21344, icon: <GiPlanetCore size={iconSize}/>},
    {id: 3, name: "venus", value: 38025, icon: <GiPlanetCore size={iconSize}/>},
    {id: 4, name: "earth", value: 40075, icon: <GiEarthAfricaEurope size={iconSize}/>},
    {id: 5, name: "neptune", value: 155600, icon: <GiPlanetCore size={iconSize}/>},
    {id: 6, name: "uranus", value: 160590, icon: <GiPlanetCore size={iconSize}/>},
    {id: 7, name: "saturn", value: 378675, icon: <GiPlanetCore size={iconSize}/>},
    {id: 8, name: "jupiter", value: 439264, icon: <GiPlanetCore size={iconSize}/>},
]

const Lengths = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <Container>
            <Header/>
            <ContainerMeasures>
                <div className="form-control flex flex-col gap-5">
                    {lengths.map(length => (
                        <Input
                            key={length.id}
                            name={length.name}
                            rate={length.rate}
                            nominator={nominator}
                            callback={callback}
                        />
                    ))}
                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        <LengthProgressCard items={planets} name={"Planets"} icon={<GiRingedPlanet size={35}/>}
                                            nominator={nominator}/>
                        <LengthProgressCard items={planets} name={"Buildings"} icon={<GiRingedPlanet size={35}/>}
                                            nominator={nominator}/>
                        <LengthProgressCard items={planets} name={"Buildings"} icon={<GiRingedPlanet size={35}/>}
                                            nominator={nominator}/>
                        <LengthProgressCard items={planets} name={"Buildings"} icon={<GiRingedPlanet size={35}/>}
                                            nominator={nominator}/>
                    </div>
                </div>
            </ContainerMeasures>
            <Footer/>
        </Container>
    );
};

export default Lengths;
