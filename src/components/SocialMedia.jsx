import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsGithub />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
}

export default SocialMedia;
