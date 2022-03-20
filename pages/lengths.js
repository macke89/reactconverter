import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";

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
                <div className="w-full flex flex-col gap-5 mb-2 w-full">
                    <progress className="progress progress-primary w-full" value={nominator} max="100"/>
                    <progress className="progress progress-primary w-full" value={nominator} max="100"/>
                    <progress className="progress progress-primary w-full" value={nominator} max="100"/>
                    <progress className="progress progress-primary w-full" value={nominator} max="500"/>
                    <progress className="progress progress-primary w-full" value={nominator} max="3451.305"/>
                </div>
            </ContainerMeasures>
            <Footer/>
        </Container>
    );
};

export default Lengths;
