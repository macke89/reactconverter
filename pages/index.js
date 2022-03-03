import Header from "/components/sections/Header"
import Footer from "../components/sections/Footer";

export default function Home() {
    return (<>
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex justify-center w-full">
                <div>
                    <div className="btn-group mb-10">
                        <button className="btn btn-active">Button</button>
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                    </div>
                    <div className="form-control w-full flex flex-col gap-5 mb-2">
                        <label className="input-group">
                            <span className="w-1/4">Email</span>
                            <input type="number" placeholder="info@site.com"
                                   className="input input-bordered w-3/4"/>
                        </label>
                        <label className="input-group">
                            <span className="w-1/4">Email</span>
                            <input type="number" placeholder="info@site.com"
                                   className="input input-bordered w-3/4"/>
                        </label>
                        <label className="input-group">
                            <span className="w-1/4">Email</span>
                            <input type="number" placeholder="info@site.com"
                                   className="input input-bordered w-3/4"/>
                        </label>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    </>)
}
