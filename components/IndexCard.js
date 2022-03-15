import React from 'react';
import Link from "next/link"

const IndexCard = ({name, icon, link}) => {
    return (
        <Link href={link}>
        <a className="mo_container group hover:text-white">
            <div className="mo_dummy"/>
            <div className="mo_element btn btn-primary h-full flex flex-col justify-center gap-1">
                <i className="group-hover:text-white">{icon}</i>
                <p className="group-hover:text-white text-xl">{name}</p>
            </div>
        </a>
        </Link>
    );
};

export default IndexCard;
