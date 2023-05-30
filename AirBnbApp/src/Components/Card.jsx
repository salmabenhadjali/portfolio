import React from "react";

export default function Card(props) {
    let badgetext
    if (props.openSpots === 0) {
        badgetext = 'SOLD OUT'
    } else if (props.location === 'Online') {
        badgetext = 'ONLINE'
    }

    return (
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img className="card--image" src={`../../images/${props.coverImg}`}/>
            <div className="card--stats">
                <img className="card--star" src="../../images/star.png"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) . </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--cost">
                <span className="bold">From ${props.price}</span> / person
            </p>
        </div>
    )
}