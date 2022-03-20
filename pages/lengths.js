import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";
import LengthProgressCard from "../components/LengthProgressCard";
import {GiEarthAfricaEurope, GiPlanetCore, GiRingedPlanet} from "react-icons/gi";

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
    {id: 1, name: "mercury", circumference: 15329, icon: <GiPlanetCore size={25}/>},
    {id: 2, name: "mars", circumference: 21344, icon: <GiPlanetCore size={25}/>},
    {id: 3, name: "venus", circumference: 38025, icon: <GiPlanetCore size={25}/>},
    {id: 4, name: "earth", circumference: 40075, icon: <GiEarthAfricaEurope size={25}/>},
    {id: 5, name: "neptune", circumference: 155600, icon: <GiPlanetCore size={25}/>},
    {id: 6, name: "uranus", circumference: 160590, icon: <GiPlanetCore size={25}/>},
    {id: 7, name: "saturn", circumference: 378675, icon: <GiPlanetCore size={25}/>},
    {id: 8, name: "jupiter", circumference: 439264, icon: <GiPlanetCore size={25}/>},
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
                <div className="form-control w-full flex flex-col gap-5 mb-2">
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
                <LengthProgressCard planets={planets} icon={<GiRingedPlanet size={35}/>} nominator={nominator}/>
            </ContainerMeasures>
            <Footer/>
        </Container>
    );
};

export default Lengths;
