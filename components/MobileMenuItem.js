import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

const MobileMenuItem = ({id, name, link}) => {
    return (
        <Link href={link}>
            <a key={id} className={`btn btn-ghost w-full ${useRouter().pathname === link && "btn-active"}`}>{name}</a>
        </Link>
    );
};

export default MobileMenuItem;
