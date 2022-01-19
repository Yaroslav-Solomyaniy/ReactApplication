import React from "react";
import style from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__inner}>
        <div className={style.footer__item}>
          <h3>Airbnb</h3>
          <div className={style.footer__link}>
            <a className={style.links} href="#">
              About
            </a>
            <a className={style.links} href="#">
              Press
            </a>
            <a className={style.links} href="#">
              Help
            </a>
          </div>
        </div>
        <div className={style.footer__item}>
          <h3>Discover</h3>
          <div className={style.footer__link}>
            <a className={style.links} href="#">
              Travel credit
            </a>
            <a className={style.links} href="#">
              Business
            </a>
            <a className={style.links} href="#">
              Guidebooks
            </a>
          </div>
        </div>
        <div className={style.footer__item}>
          <h3>Hosting</h3>
          <div className={style.footer__link}>
            <a className={style.links} href="#">
              Why host
            </a>
            <a className={style.links} href="#">
              Hospitality
            </a>
            <a className={style.links} href="#">
              Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
