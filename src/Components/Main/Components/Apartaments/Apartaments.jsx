import React from 'react'
import style from "./Apartaments.module.scss"
function Apartaments() {
    return (
        <div className={style.block__apartaments}>
            <h1 className={style.apartaments__title}>Quiet apartment</h1>
            <h3 className={style.apartaments__subTitle}>Entire apartment</h3>
            <div>
                <span className={style.desc__item}>4 guests</span>
                <span className={style.desc__item}>1 bed</span>
                <span className={style.desc__item}>1 bath</span>
            </div>
            <p className={style.text}>
                City Apartment is newly renovated in the heart of Budapest, right
                in the city center. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <a className={`${style.links} ${style.links__tel}`} href="tel:+38093217239">Contact host</a>
        </div>
    )
}

export default Apartaments
