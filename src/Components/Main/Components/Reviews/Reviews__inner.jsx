import React from "react";
import "./Reviews__inner.css";
import Reviews__item from "./Reviews__item";
function Reviews__inner(props) {
  return (
    <div className="reviews__inner">
      <Reviews__item
        name="Ivan"
        date="September 2016"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus earum quidem aperiam totam assumenda dolor deserunt error id quis."
      />
      <Reviews__item
        name="Petro"
        date="May 2019"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus earum quidem aperiam totam assumenda dolor deserunt error id quis."
      />
      <Reviews__item text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere possimus earum quidem aperiam totam assumenda dolor deserunt error id quis." />
    </div>
  );
}
export default Reviews__inner;
