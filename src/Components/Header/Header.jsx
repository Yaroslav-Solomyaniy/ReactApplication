import React from 'react'
import "./Header.css"
import logo from "../../img/logo.png";
import profile from "../../img/profile.png"
function Header() {
    return (
        <header>
            <div className="header__inner">
                <div className="header__left">
                    <div className="header__logo">
                        <img className="logo" src={logo} alt="Logotype"/>
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__nav">
                        <a className="nav__link links" href="#">Become a host</a>
                        <a className="nav__link links" href="#">Trips</a>
                        <a className="nav__link links" href="#">Messages</a>
                    </div>

                    <div className="header__photo">
                        <img
                            className="profile__photo"
                            src={profile}
                            alt="Profile Photo"
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
