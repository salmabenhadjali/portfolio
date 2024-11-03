import TravelCardType from "../../types/TravelCard"
import './TravelCard.css';

function TravelCard(props: TravelCardType) {
  return (
    <figure className="travel">
      <div className="travel__img">
        <img src={"/assets/" + props.imagePath} alt={props.title} height="50" width="50"/>
      </div>
      <figcaption>
        <div className="location">
          <div className="pin"></div>
          <h5>{props.location}</h5>
          <a target="_blank" href={props.googleMapUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <span>{props.startDate} - {props.endDate}</span>
        <p>{props.description}</p>
      </figcaption>
    </figure>
  )
}

export default TravelCard;
