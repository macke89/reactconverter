export default function Home() {
    return (<>
        <div className="min-h-screen flex flex-col justify-between">
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li><a>Item 1</a></li>
                            <li tabIndex="0">
                                <a>
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20"
                                         height="20" viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                                    </svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </header>
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
            <footer className="flex justify-between">
                <div>copyright</div>
                <div>powered by</div>
            </footer>
        </div>
    </>)
}
