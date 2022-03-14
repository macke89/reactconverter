import React, {useEffect} from 'react';
import Link from "next/link"
import {useRouter} from 'next/router'

const Header = () => {
    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log(window.innerHeight, window.innerWidth)
        })
    }, [])
    return (
        <header>
            <nav className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href="/">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </Link>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn m-1 btn-primary">Measures</label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <Link href="/lengths">
                            <a className={`btn btn-ghost ${useRouter().pathname === "/lengths" && "btn-active"}`}>Lengths</a>
                        </Link>
                        <Link href="/weights">
                            <a className={`btn btn-ghost ${useRouter().pathname === "/weights" && "btn-active"}`}>Weights</a>
                        </Link>
                        <Link href="/temperatures">
                            <a className={`btn btn-ghost ${useRouter().pathname === "/temperatures" && "btn-active"}`}>Temperatures</a>
                        </Link>
                        <Link href="/times">
                            <a className={`btn btn-ghost ${useRouter().pathname === "/times" && "btn-active"}`}>Times</a>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
