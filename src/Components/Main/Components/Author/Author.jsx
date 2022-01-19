import React from 'react'
import style from "./Author.module.scss";
function Author() {
    return (
            <div className={style.block__author}>
                <h2 className={style.title_author}>Hosted by Jane</h2>
                <h3 className={style.subtitle__author__city}>Budapest, Hungary</h3>
                <div className={`${style.author__text} ${style.text}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et magna aliqua.
                </div>
                <a className={`${style.links__host} ${style.links}`} href="tel:+38093217239">Contact host</a>
            </div>
    )
}

export default Author
