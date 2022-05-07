import React from "react";
import { NavDots, SocialMedia } from "../components";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        <NavDots active={idName} />
      </div>
    );
  };

export default AppWrap;
