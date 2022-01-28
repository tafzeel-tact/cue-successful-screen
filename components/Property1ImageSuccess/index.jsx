import React from "react";
import "./Property1ImageSuccess.css";

function Property1ImageSuccess(props) {
  const { image, image31 } = props;

  return (
    <div className="image" style={{ backgroundImage: `url(${image})` }}>
      <img className="image-31" src={image31} />
    </div>
  );
}

export default Property1ImageSuccess;
