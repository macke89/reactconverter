import React from 'react'
import Link from "next/link"

// TODO Do Footer
const Footer = () => {
    const dateObj = new Date();
    const year = dateObj.getUTCFullYear(); //months from 1-12
    
    return (
        <footer className="bg-base-200 p-2 flex items-center justify-between gap-10">
            <Link href="https://moweb.digital/" passHref>
                <a target="_blank" className="btn m-1 btn-secondary font-bold transition-all duration-300">Homepage</a>
            </Link>
            <p className="font-semibold">
                Copyright © {year} moweb.digital
            </p>
        </footer>

    );
};

export default Footer;
