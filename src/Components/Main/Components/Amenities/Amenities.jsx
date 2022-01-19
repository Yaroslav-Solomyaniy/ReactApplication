import React from "react";
import style from "./Amenities.module.scss"
function Amenities() {
  return (
    <div className={style.Amenities}>
      <h3 className={style.Amenities__title}>Amenities</h3>
      <div className={style.Amenities__inner}>
        <div className={style.Amenities__inner__text}>Elevator</div>
        <div className={style.Amenities__inner__text}>Hair dryer</div>
        <div className={style.Amenities__inner__text}>Washer</div>
        <div className={style.Amenities__inner__text}>Kitchen</div>
      </div>
      <a className={style.links} href="#">
        Show All Amenities
      </a>
    </div>
  );
}

export default Amenities;
