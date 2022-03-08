import Header from "/components/sections/Header"
import Footer from "../components/sections/Footer";
import Length from "../components/sections/Length";
import React, {useState} from "react";
import Weights from "../components/sections/Weights";
import Temperatures from "../components/sections/Temperatures";

export default function Home() {
    const [show, setShow] = useState('lengths');

    function handleChoice(value){
        console.log('change');
        setShow(value)
    }
    return (<>
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="flex justify-center w-full">
                <div>
                    <div className="btn-group mb-10">
                        <button onClick={() => handleChoice('lengths')} className={`btn ${show === 'lengths' && 'btn-active'}`}>Lengths</button>
                        <button onClick={() => handleChoice('weights')} className={`btn ${show === 'weights' && 'btn-active'}`}>Weights</button>
                        <button onClick={() => handleChoice('temperatures')} className={`btn ${show === 'temperatures' && 'btn-active'}`}>Button</button>
                    </div>
                    {show === 'lengths' && <Length/>}
                    {show === 'weights' && <Weights/>}
                    {show === 'temperatures' && <Temperatures/>}
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
