import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {styles} from "../styles.js";
import {navLinks} from "../constants/index.js";
import {logo, menu, close} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState(' ');
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-lg backdrop-filter`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        // eslint-disable-next-line no-undef
                        setActive(" ");
                        window.scrollTo(0,0);
                    }}
                >
                    <img src={logo} alt="logo" className="w-20 h-20 object-contain overflow-hidden bg-cover bg-no-repeat"/>

                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-4">
                    {navLinks.map((Link) => (
                        <li key={Link.id} className={`${ active === Link.title ? "text-purple" : "text-secondary"}
                 hover:text-purple text-[18px] font-medium cursor-pointer tracking-widest`}
                            onClick={() => setActive(Link.title)}
                        >
                            <a href={`#${Link.id}`}>{Link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
                         onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((Link) => (
                                <li key={Link.id} className={`${ active === Link.title ? "text-purple" : "text-secondary"}
                 font-poppins font-medium cursor-pointer text-[16px] tracking-widest`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(Link.title);
                                    }}
                                >
                                    <a href={`#${Link.id}`}>{Link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar