import { IMG_CDN_URL } from "../constants";
import "./RestaurantCard.css";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{areaName}</h5>
      <span>
        
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "rgb(236, 56, 56)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { backgroundColor: "#00ad1d" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString}
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>
    </div>
  );
};


export default RestaurantCard;