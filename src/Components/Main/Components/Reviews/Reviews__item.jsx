import React from 'react'
import "./Reviews__item.css"
import photo from "../../../../img/men.png"
function Reviews__item(props) {

    return (
        <div className="reviews__item">
            <div className="reviews__item__top">
                <div className="reviews__item__left">
                    <div className="reviews__photo">
                        <img
                            className="rev__photo"
                            src={photo}
                            alt="Profile Photo"
                        />
                    </div>
                </div>
                <div className="reviews__item__right">
                    <div className="reviews__name">{props.name}</div>
                    <div className="reviews__date">{props.date}</div>
                </div>
            </div>
            <div className="reviews__item__bottom">
                <div className="reviews__text text">
                    {props.text}
                </div>
            </div>
        </div>
    )
}

const time = new Date();
const year = time.getFullYear();
const month = time.getMonth();
const nameMonth = ['January','February','March','April','May','June','July','August','September','October','November','December'];
Reviews__item.defaultProps = {name:"Anonimus",date:nameMonth[month]+" "+year,text:""};

export default Reviews__item
