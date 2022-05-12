import React from "react";

import "./Header.scss";

import { motion } from "framer-motion";

import { images } from "../../constants";

import Developer from "./Developer/Developer";

import { AppWrap } from "../../wrapper";

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
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ y: [90, 0], opacity: [0, 1] }}
        transition={{ duration: 0.9 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div className="header-text" style={{ marginLeft: 10 }}>
              <h1 className="header-text-header">Hello, my name is</h1>
              <h2 className="header-name">
                Dawid <span className="peace">✌🏼</span>
              </h2>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <Developer />
          </div>
          <div className="info-cmp app__flex">
            <p className="header-info p-text">
              I’m a self-taught front-end developer, based in Vienna, Austria. I
              want to turn my passion into a career.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.sass, images.react, images.python].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
