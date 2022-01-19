import React from 'react'
import style from './Photo.module.scss'
import photograpia from "../../img/photo.png"
function Photo() {
    return (
        <div>
            <img className={style.photo} src={photograpia} alt="Images"/>
        </div>
    )
}

export default Photo
