import React from 'react'
import "./Author.css"
function Author() {
    return (
            <div className="block__author">
                <h2 className="title_author">Hosted by Jane</h2>
                <h3 className="subtitle__author__city">Budapest, Hungary</h3>
                <div className="author__text text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et magna aliqua.
                </div>
                <a className="links links__host" href="tel:+38093217239">Contact host</a>
            </div>
    )
}

export default Author
