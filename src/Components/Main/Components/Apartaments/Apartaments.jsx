import React from 'react'
import "./Apartaments.css"
function Apartaments() {
    return (
        <div className="block__apartaments">
            <h1 className="apartaments__title">Quiet apartment</h1>
            <h3 className="apartaments__subTitle">Entire apartment</h3>
            <div className="apartaments__description">
                <span className="desc__item">4 guests</span>
                <span className="desc__item">1 bed</span>
                <span className="desc__item">1 bath</span>
            </div>
            <p className="text">
                City Apartment is newly renovated in the heart of Budapest, right
                in the city center. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <a className="links links__tel" href="tel:+38093217239">Contact host</a>
        </div>

    )
}

export default Apartaments
