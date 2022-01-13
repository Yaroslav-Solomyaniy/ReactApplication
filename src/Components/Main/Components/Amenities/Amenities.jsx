import React from "react";
import "./Amenities.css"
function Amenities() {
  return (
    <div className="Amenities">
      <h3 className="Amenities__title">Amenities</h3>
      <div className="Amenities__inner">
        <div className="Amenities__inner__text">Elevator</div>
        <div className="Amenities__inner__text">Hair dryer</div>
        <div className="Amenities__inner__text">Washer</div>
        <div className="Amenities__inner__text">Kitchen</div>
      </div>
      <a className="links" href="#">
        Show All Amenities
      </a>
    </div>
  );
}

export default Amenities;
