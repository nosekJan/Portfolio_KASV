import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import {styles} from "../styles.js";
import {navLinks} from "../constants/index.js";
import {logo3, menu, close} from '../assets';

const Navbar = () => {
    const [active, setActive] = useState(' ');
    const [toggle, setToggle] = useState(false);
    return (
        <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 backdrop-blur-md backdrop-filter`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto font-font">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        // eslint-disable-next-line no-undef
                        setActive(" ");
                        window.scrollTo(0,0);
                    }}
                >
                    {/*<img src={logo3} alt="logo" className="w-20 h-20 object-contain overflow-hidden bg-cover bg-no-repeat"/>*/}
                    <div className="w-20 h-20 bg-[url('/src/assets/logo.png')] hover:bg-[url('/src/assets/logo3.png')] bg-cover"></div>

                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-4">
                    {navLinks.map((Link) => (
                        <li key={Link.id} className={`${ active === Link.title ? "text-purple" : "text-secondary"}
                            hover:text-purple text-[18px] font-medium tracking-widest`}
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
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black`}>
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((Link) => (
                                <li key={Link.id} className={`${ active === Link.title ? "text-purple" : "text-secondary"}
                                    font-poppins font-medium text-[16px] tracking-widest`}
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