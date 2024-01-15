import React from "react";

const Card = ({image, title, message}) => {
    return (
        <div className='container-card'>
            <div className="congratulation-card">
                <div className="image">
                    <img src={image} alt='photo'/>
                </div>
                <div className="title">
                    <h2>{title}</h2>
                </div>
                <div className="message">
                    <h4>{message}</h4>
                </div>
            </div>
        </div>

    )

}

export default Card;