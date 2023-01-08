import React from 'react'
import Link from "next/link"

const Footer = () => {
    const dateObj = new Date();
    const year = dateObj.getUTCFullYear(); //months from 1-12

    return (
        <footer className="bg-base-200 p-2 flex flex-col items-center justify-center gap-1 sm:flex-row">
            <div>
                {/*<Link href="https://e-girls.art//" passHref>*/}
                {/*    <a target="_blank" className="btn m-1 btn-secondary font-bold transition-all duration-300">E-Girls</a>*/}
                {/*</Link>*/}
                <Link href="http://promptgen.online//" passHref>
                    <a target="_blank" className="btn m-1 btn-secondary font-bold transition-all duration-300">Prompt Generator</a>
                </Link>
            </div>
            <p className="font-semibold">
                Copyright © {year} convertall.cc
            </p>
        </footer>
    );
};

export default Footer;
