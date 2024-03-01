import React from "react";


function Card(props){
    return (
        <div className="card">
            <div className="card__body">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__description">{props.description}</p>
                <a href={props.link}>
                    <button className="card__btn">Learn more</button>
                </a>
            </div>
        </div>
      );
}

export default Card;