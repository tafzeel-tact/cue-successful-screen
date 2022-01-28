import React from "react";
import "./LogIn2.css";

function LogIn2(props) {
  const { src } = props;

  return <div className="image-1" style={{ backgroundImage: `url(${src})` }}></div>;
}

export default LogIn2;
