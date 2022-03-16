import Header from "/components/sections/Header";
import Footer from "../components/sections/Footer";
import React, {useState} from "react";
import IndexCard from "../components/IndexCard";
import {GiWeight} from "react-icons/gi";
import {BsRulers, BsClockFill, BsThermometerHalf} from "react-icons/bs";
import {FaTemperatureLow} from "react-icons/fa";

const cards = [
    {id: 1, name: "length", icon: <BsRulers size={50}/>, link: "/lengths"},
    {id: 2, name: "weight", icon: <GiWeight size={50}/>, link: "/weights"},
    {id: 3, name: "time", icon: <BsClockFill size={50}/>, link: "/times"},
    {id: 4, name: "temp", icon: <BsThermometerHalf size={50}/>, link: "/temperatures"},
]

export default function Home() {
    const [show, setShow] = useState('lengths');

    function handleChoice(value) {
        console.log('change');
        setShow(value)
    }

    return (<>
        <div data-theme="corporate" className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="grid grid-cols-2 grid-rows-2 gap-5 p-4 sm:self-center sm:w-1/2 lg:w-1/3">
                {cards.map(card => (
                    <IndexCard name={card.name} icon={card.icon} link={card.link}/>
                ))}
            </main>
            <Footer/>
        </div>
    </>)
}
