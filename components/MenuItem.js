import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

const MenuItem = ({id, name, link}) => {
    return (
        <Link href={link}>
            <a key={id} className={`btn btn-outline btn-secondary ${useRouter().pathname === link && "btn-active"}`}>{name}</a>
        </Link>
    );
};

export default MenuItem;
