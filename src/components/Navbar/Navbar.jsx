import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlinePaperClip, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.65, ease: "easeIn" }}
    >
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <a href="#" className="logo">
            dkostka<span className="logo__dot">.</span>
          </a>
        </div>

        <ul className="app__navbar-links">
          {["home", "about", "work", "skills", "contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div></div>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="app__switcher">
          <h1>Switcher</h1>
        </div>

        <div className="app__navbar-menu">
          <BiMenuAltRight onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0, 1] }}
              transition={{ duration: 0.39, ease: "easeOut" }}
            >
              <HiX className="x" onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "work", "skills", "contact"].map((item) => (
                  <li key={{ item }}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
