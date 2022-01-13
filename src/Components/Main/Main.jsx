import React from 'react'
import "./Main.css"
import Apartaments from "./Components/Apartaments/Apartaments";
import Amenities from "./Components/Amenities/Amenities";
import Reviews__inner from "./Components/Reviews/Reviews__inner";
import Author from "./Components/Author/Author";
import Form from "./Components/Form";

function Main() {
    return (
        <main>
            <div className="main__inner">

                <div className="main__left">
                    <Apartaments/>
                    <Amenities/>
                    <div className="block__reviews">
                        <h2 className="reviews__title">Reviews</h2>
                        <Reviews__inner/>
                    </div>
                    <Author/>
                </div>
                <div className="main__right">
                    <Form/>
                </div>
            </div>
        </main>
    )
}

export default Main
