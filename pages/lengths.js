import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";
import LengthProgressCard from "../components/LengthProgressCard";
import {
    GiCastle,
    GiCastleRuins,
    GiChurch,
    GiEarthAfricaEurope,
    GiPisaTower,
    GiPlanetCore, GiRadioTower,
    GiRingedPlanet, GiWhiteTower
} from "react-icons/gi";
import {BsBuilding} from "react-icons/bs";
import {BiBuilding} from "react-icons/bi";
import {FaChurch} from "react-icons/fa";
import Head from "next/head";

const mainIconSize = 25;
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

const buildings = [
    {id: 1, name: "eiffel tower", value: 300, icon: <GiRadioTower size={iconSize}/>},
    {id: 2, name: "empire state building", value: 381, icon: <GiRadioTower size={iconSize}/>},
    {id: 3, name: "taipei", value: 508.2, icon: <GiRadioTower size={iconSize}/>},
    {id: 4, name: "one world trade center", value: 546.2, icon: <GiRadioTower size={iconSize}/>},
    {id: 5, name: "shanghai tower", value: 632, icon: <GiRadioTower size={iconSize}/>},
    {id: 6, name: "skytree tokyo", value: 634, icon: <GiRadioTower size={iconSize}/>},
    {id: 7, name: "burj khalifa", value: 829.8, icon: <GiRadioTower size={iconSize}/>},
]

const oldBuildings = [
    {id: 1, name: "colosseum", value: 48, icon: <GiCastleRuins size={iconSize}/>},
    {id: 2, name: "tower of pisa", value: 57, icon: <GiPisaTower size={iconSize}/>},
    {id: 3, name: "notre-dame", value: 91.44, icon: <FaChurch size={iconSize}/>},
    {id: 4, name: "big ben", value: 96, icon: <GiWhiteTower size={iconSize}/>},
    {id: 5, name: "st. peters basilica", value: 136.6, icon: <FaChurch size={iconSize}/>},
    {id: 6, name: "cologne cathedral", value: 157, icon: <FaChurch size={iconSize}/>},
    {id: 7, name: "ulm minster", value: 161.5, icon: <GiChurch size={iconSize}/>},
    {id: 8, name: "lincoln cathedral", value: 190, icon: <FaChurch size={iconSize}/>},
]

function convertLength(value, rate) {
    return value * rate
}

const Lengths = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <>
            <Head>
                <title>Lengths</title>
            </Head>

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
                        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap inline-flex w-full">
                            <LengthProgressCard items={oldBuildings}
                                                name={"Historic Buildings"}
                                                icon={<GiCastle size={mainIconSize}/>}
                                                nominator={convertLength(nominator, 1000)}
                                                unit="M"/>
                            <LengthProgressCard items={buildings}
                                                name={"Buildings"}
                                                icon={<BsBuilding size={mainIconSize}/>}
                                                nominator={convertLength(nominator, 1000)}
                                                unit="M"/>
                            <LengthProgressCard items={planets}
                                                name={"Planets"}
                                                icon={<GiRingedPlanet size={mainIconSize}/>}
                                                nominator={nominator}
                                                unit="KM"/>
                        </div>
                    </div>
                </ContainerMeasures>
                <Footer/>
            </Container>
        </>
    );
};

export default Lengths;
