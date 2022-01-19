import React from "react";
import style from "./Reviews__item.module.scss";
import photo from "../../../../img/men.png";
function Reviews__item(props) {
  return (
    <div className={style.reviews__item}>
      <div className={style.reviews__item__top}>
        <div className={style.reviews__item__left}>
          <div className={style.reviews__photo}>
            <img className={style.rev__photo} src={photo} alt="Profile Photo" />
          </div>
        </div>
        <div className={style.reviews__item__right}>
          <div className={style.reviews__name}>{props.name}</div>
          <div className={style.reviews__date}>{props.date}</div>
        </div>
      </div>
      <div className={style.reviews__item__bottom}>
        <div className={`${style.reviews__text} ${style.text}`}>{props.text}</div>
      </div>
    </div>
  );
}

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const nameMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
Reviews__item.defaultProps = {
  name: "Anonimus",
  date: nameMonth[month] + " " + year,
  text: "",
};

export default Reviews__item;
