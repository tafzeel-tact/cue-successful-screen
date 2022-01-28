import React from "react";
import "./Icons.css";

function Icons(props) {
  const { iconoirFacebook, iconoirTwitter, akarIconsLinkChain } = props;

  return (
    <div className="icons">
      <img className="iconoirfacebook" src={iconoirFacebook} />
      <img className="icon" src={iconoirTwitter} />
      <img className="icon" src={akarIconsLinkChain} />
    </div>
  );
}

export default Icons;
