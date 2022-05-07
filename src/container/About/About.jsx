import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import "./About.scss";

import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="about">
      <h2 className="head-text">If you’re wondering who I am…</h2>
      <p className="p-text about-text">
        I'm a self-taught Frontend developer with a passion for web design. I
        enjoy developing simple, clean and slick websites that provide real
        value to the end user. The best way to learn is to practice, I did a
        bunch of personal projects and freelance projects with the knowledge I
        gathered from courses and books, you can check them out on my portfolio.
      </p>
      <br />
      <p className="p-text about-text">
        I always want to learn more, do more, and be more. I’m also a firm
        believer that we should never settle.
      </p>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.21 }}
            transition={{ duration: 0.4, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(About, "about");
