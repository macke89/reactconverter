import Header from "/components/sections/Header"
import Footer from "../components/sections/Footer";
import Length from "../components/sections/Length";
import React, {useState} from "react";

export default function Home() {
    const [show, setShow] = useState('lengths');
    return (<>
        <div className="min-h-screen flex flex-col justify-between">
            <Header/>
            <main className="flex justify-center w-full">
                <div>
                    <div className="btn-group mb-10">
                        <button className="btn btn-active">Button</button>
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                    </div>
                    {show === 'lengths' && <Length/>}
                    {show === 'lengths' && <Length/>}
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
