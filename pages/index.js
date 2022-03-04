import Header from "/components/sections/Header"
import Footer from "../components/sections/Footer";
import Length from "../components/sections/Length";
import React from "react";

export default function Home() {
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
                    <Length/>
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
