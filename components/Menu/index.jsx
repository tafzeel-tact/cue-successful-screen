import React from "react";
import "./Menu.css";

function Menu(props) {
  const { logo, googleplayA1B4Ed6211C913, appstore6F955D329Ad713 } = props;

  return (
    <div className="menu">
      <div className="menu-1">
        <img className="logo" src={logo} />
        <div className="group-38186">
          <img className="googleplaya1b4ed6211c9-1-3" src={googleplayA1B4Ed6211C913} />
          <img className="appstore6f955d329ad7-1-3" src={appstore6F955D329Ad713} />
        </div>
        <img
          className="support"
          src="https://anima-uploads.s3.amazonaws.com/projects/61f1387fa60ef2351d70a102/releases/61f139dc31e2102e5db0c9d5/img/support@2x.png"
        />
      </div>
    </div>
  );
}

export default Menu;
