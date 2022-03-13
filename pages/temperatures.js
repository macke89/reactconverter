import React, {useState} from 'react';
import InputC from "../components/InputC";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

// DONE Fix this

const temperatures = [
    {name: "fahrenheit", rate: 1},
    {name: "celsuis", rate: 100},
    {name: "kelvin", rate: 100},
]

const Temperatures = () => {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [kelvin, setKelvin] = useState(0);

    const handleCelsius = event => {
        setCelsius(event.target.value);
        setFahrenheit(parseFloat(((event.target.value * 9 / 5) + 32).toFixed(5)));
        setKelvin(parseFloat((parseInt(event.target.value) + 273.15).toFixed(5)));
    }

    const handleFahrenheit = event => {
        setFahrenheit(event.target.value);
        setCelsius(parseFloat(((event.target.value - 32) * 5 / 9).toFixed(5)));
        setKelvin(parseFloat(((event.target.value - 32) * 5 / 9 + 273.15).toFixed(5)));
    }

    const handleKelvin = event => {
        setKelvin(event.target.value);
        setCelsius(parseFloat((event.target.value - 273.15).toFixed(5)));
        setFahrenheit(parseFloat(((event.target.value - 273.15) * 9 / 5 + 32).toFixed(5)))
    }

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="flex justify-center w-full">
                <div>
                    <div className="form-control w-full flex flex-col gap-5 mb-2">
                        <InputC label="Celsius" value={celsius} onChange={handleCelsius}/>
                        <InputC label="Fahrenheit" value={fahrenheit} onChange={handleFahrenheit}/>
                        <InputC label="Kelvin" value={kelvin} onChange={handleKelvin}/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Temperatures;
