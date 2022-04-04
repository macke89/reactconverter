import React, {useEffect, useState} from 'react';
import Link from "next/link";
import MobileMenuItem from "../MobileMenuItem";
import MenuItem from "../MenuItem";
import UseWindowSize from "../customHooks/UseWindowsSize";

const menuItems = [
    {id: 1, name: "lengths", link: "/lengths"},
    {id: 2, name: "weights", link: "/weights"},
    {id: 3, name: "temperatures", link: "/temperatures"},
    {id: 4, name: "time", link: "/times"},
]

const Header = () => {
    const size = UseWindowSize();
    return (
        <header className="navbar bg-base-200">
            <div className="flex-1">
                <Link href="/">
                    <a className="btn btn-ghost normal-case text-xl group">CONVERT<span
                        className="text-accent group-hover:text-accent-focus transition-all duration-100">ALL</span></a>
                </Link>
            </div>
            {size.width > 600 &&
                <nav className="btn-group">
                    {menuItems.map(menuItem => {
                        return <MenuItem key={menuItem.id} {...menuItem}/>
                    })}
                </nav>}
            {size.width < 600 &&
                <nav className="dropdown dropdown-end">
                    <label tabIndex="0"
                           className="btn m-1 btn-secondary font-bold transition-all duration-300">Measures</label>
                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {/*TODO: Add new Menu from daisy UI?*/}
                        {menuItems.map(menuItem => {
                            return <MobileMenuItem key={menuItem.id} {...menuItem}/>
                        })}
                    </div>
                </nav>}
        </header>
    );
};

export default Header;
