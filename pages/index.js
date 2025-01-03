import Header from "/components/sections/Header";
import Footer from "../components/sections/Footer";
import React, {useState} from "react";
import IndexCard from "../components/IndexCard";
import {GiWeight} from "react-icons/gi";
import {BsRulers, BsClockFill, BsThermometerHalf} from "react-icons/bs";
import {FaTemperatureLow} from "react-icons/fa";
import Container from "../components/sections/Container";
import Head from "next/head";

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

    return (
        <>
            <Head>
                <title>ConvertAllCC</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <script src="https://cdn.usefathom.com/script.js" data-site="EYDQQCSM" defer></script>
            </Head>

            <Container>
                <Header/>
                <main className="grid grid-cols-2 grid-rows-2 gap-5 p-4 sm:self-center sm:w-1/2 lg:w-1/3">
                    {cards.map(card => (
                        <IndexCard
                            key={card.id}
                            name={card.name}
                            icon={card.icon}
                            link={card.link}
                        />
                    ))}
                </main>
                <Footer/>
            </Container>
        </>
    )
}
