import React, {useState} from 'react';
import Input from "../components/Input";
import Header from "../components/sections/Header";
import Footer from "../components/sections/Footer";
import Container from "../components/sections/Container";
import ContainerMeasures from "../components/sections/ContainerMeasures";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Head from "next/head";

const weights = [
    {id: 1, name: "gram", rate: 1000000},
    {id: 2, name: "ounce", rate: 35274},
    {id: 3, name: "kg", rate: 1000},
    {id: 4, name: "stone", rate: 2204.62},
    {id: 5, name: "stone", rate: 157.473},
    {id: 6, name: "us ton", rate: 1.10231},
    {id: 7, name: "tonne", rate: 1},
    {id: 8, name: "imp ton", rate: 0.984207},
]

const Weights = () => {
    const [nominator, setNominator] = useState(0);

    function callback(eValue) {
        setNominator(eValue)
    }

    const percentage = 16;

    return (
        <>
            <Head>
                <title>Weights</title>
            </Head>

            <Container>
                <Header/>
                <ContainerMeasures>
                    <div className="form-control flex flex-col gap-5">
                        {weights.map(weight => (
                            <Input
                                key={weight.id}
                                name={weight.name}
                                rate={weight.rate}
                                nominator={nominator}
                                callback={callback}
                            />
                        ))}
                    </div>
                    {/*<div className="w-full">*/}
                    {/*    <div key={1} className="shadow-xl p-4 flex-1 text-base-content rounded-sm min-w-[16em]">*/}
                    {/*        <div className="divider">*/}
                    {/*            <i>Icon</i>*/}
                    {/*            <h3 className="font-bold uppercase text-center">Name</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col gap-1">*/}
                    {/*            <CircularProgressbar value={percentage} text={`${percentage}%`} />;*/}
                    {/*            <CircularProgressbar value={percentage} text={`${percentage}%`} />;*/}
                    {/*            <CircularProgressbar value={percentage} text={`${percentage}%`} />;*/}
                    {/*            <div className="radial-progress" style="--value:70;">70%</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </ContainerMeasures>
                <Footer/>
            </Container>
        </>
    );
};

export default Weights;
