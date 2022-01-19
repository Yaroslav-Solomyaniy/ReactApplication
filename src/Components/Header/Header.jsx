import React from "react";
import style from "./Header.module.scss";
import logo from "../../img/logo.png";
import profile from "../../img/profile.png";
function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div className={style.header__left}>
          <div className={style.header__logo}>
            <img className={style.logo} src={logo} alt="Logotype" />
          </div>
        </div>

        <div className={style.header__right}>
          <div className={style.header__nav}>
            <a className={`${style.nav__link} ${style.links}`} href="#">
              Become a host
            </a>
            <a className={`${style.nav__link} ${style.links}`} href="#">
              Trips
            </a>
            <a className={`${style.nav__link} ${style.links}`} href="#">
              Messages
            </a>
          </div>

          <div className={style.header__photo}>
            <img
              className={style.profile__photo}
              src={profile}
              alt="Profile Photo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
