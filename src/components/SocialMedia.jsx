import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/oblodev">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
