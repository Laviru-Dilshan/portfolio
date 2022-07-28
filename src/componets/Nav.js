import React from 'react';
import '../css/navBar.css';
import {useState, useEffect} from 'react';
import {getTopNav} from '../data/navbar'

const Navbar = () => {
    const [navItems, setNavItems] = useState([]);
    const [collapser, setCollapser] = useState('nav_menu');
    const [togglerIcon, setTogglerIcon] = useState('toggler_icon')
    useEffect(() => {
        setNavItems(getTopNav())
    },[]);
    const ontoggler = () => {
        collapser === 'nav_menu'
        ? setCollapser('nav_collapse nav_menu')
        : setCollapser('nav_menu');
        togglerIcon === 'toggler_icon'
        ? setTogglerIcon('toggler toggler_icon')
        : setTogglerIcon('toggler_icon');
    }
    return (
        <div className="nav_wrapper">
            <div className="container">
                <nav className="nav">
                    <a href="#" className="nav_brand">
                        Laviru.ml
                    </a>
                    <ul className={collapser}>
                        {navItems.map(item => (
                            <li key={item.id} className="nav_item">
                            <a href={item.href} className="nav_link">{item.label}</a>
                        </li>
                        ))}
                        <li className="nav_item">
                            <a href="" className="nav_link"></a>
                        </li>
                    </ul>
                    <div className={togglerIcon} onClick={ontoggler}>
                        <div className="line_1"></div>
                        <div className="line_2"></div>
                        <div className="line_3"></div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;