import React, { useState } from "react";
import "../css/navBar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const [nav, setNav] = useState("nav__menu");

  const navToggle = () => {
    if (active === "nav__menu" && window.scrollY === 0) {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    window.addEventListener("scroll", navToggle)

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  /*const scrollY = () => {
    if (window.scrollY > 0){

    }
  }*/

  //window.addEventListener("scroll", scrollY)

  /*const changeNav = () => {
    if (window.scrollY > 0){
      console.log(window.scrollY)
      setNav("nav_menuHide")
    }else{
      setNav("nav__menu")
    }
  }*/
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        Laviru.ml
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link">
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#projects" className="nav__link">
            Projects
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;