import React from 'react'
import "./Photo.css"
import photograpia from "../../img/photo.png"
function Photo() {
    return (
        <div className="photo__page">
            <img className="photo" src={photograpia} alt="Images"/>
        </div>
    )
}

export default Photo
