import React from "react";

import "./Header.scss";

import { motion } from "framer-motion";

import { images } from "../../constants";

import Developer from "./Developer/Developer";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ y: [70, 0], opacity: [0, 1] }}
        transition={{ duration: 0.45 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span className="peace">✌🏼</span>
            <div className="header-text" style={{ marginLeft: 10 }}>
              <h1 className="header-text-header">Hello, my name is Dawid</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <Developer />
          </div>
          <div className="info-cmp app__flex">
            <p className="header-info">
              I’m a self-taught front-end developer, based in Vienna, Austria
              and i want to turn my passion into a career.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      ></motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.sass, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Header;
