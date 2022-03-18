import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import TimeCounter from "../components/TimeCounter";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";

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
        <Container>
            <Header/>
            <ContainerMeasures>
                <div className="form-control w-full flex flex-col gap-5 mb-2">
                    <TimeCounter nominator={nominator}/>
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
            </ContainerMeasures>
            <Footer/>
        </Container>
    );
};

export default Times;
