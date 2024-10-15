import React from "react"
import './Card.css'
import user from '../../assets/Card/user.png'
import Star from '../../components/Star/Star'

function Card(contact) {
    return(
        <article className="card">
            <img src={user} className="card--image" />
            <div className="card--info">
                <Star isFilled={contact.isFavorite} handleClick={contact.salma}/>
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    );
}

export default Card;