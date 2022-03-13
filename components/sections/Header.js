import React from 'react';
import Link from "next/link"

const Header = () => {
    return (
        <div>
            <header>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal p-0">
                            <li>
                                <Link href="/lengths">
                                    <a>Lengths</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/weights">
                                    <a>Weights</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/temperatures">
                                    <a>Temperatures</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/times">
                                    <a>Times</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/testing">
                                    <a>testing</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
