import React from 'react'
import style from "./Main.module.scss"
import Apartaments from "./Components/Apartaments/Apartaments";
import Amenities from "./Components/Amenities/Amenities";
import Reviews__inner from "./Components/Reviews/Reviews__inner";
import Author from "./Components/Author/Author";
import Form from "./Components/Form";

function Main() {
    return (
        <main className={style}>
            <div className={style.main__inner}>

                <div className={style.main__left}>
                    <Apartaments/>
                    <Amenities/>
                    <div className={style.block__reviews}>
                        <h2 className={style.reviews__title}>Reviews</h2>
                        <Reviews__inner/>
                    </div>
                    <Author/>
                </div>
                <div className={style.main__right}>
                    <Form/>
                </div>
            </div>
        </main>
    )
}

export default Main
