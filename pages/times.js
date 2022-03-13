import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";

const times = [
    {name: "seconds", rate: 604800},
    {name: "minutes", rate: 10080},
    {name: "hours", rate: 168},
    {name: "days", rate: 7},
    {name: "weeks", rate: 1},
]

const Times = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="flex justify-center w-full">
                <div>
                    <div className="form-control w-full flex flex-col gap-5 mb-2">
                        {times.map(time => (
                            <Input
                                key={time.name}
                                name={time.name}
                                rate={time.rate}
                                nominator={nominator}
                                callback={callback}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Times;
