import { useState } from "react";
import "./body.css";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";
import filterData  from "../utils/helper";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useResData from "../hooks/useRestaurantData"




const Body = () => {
 
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants] = useResData(swiggy_api_URL);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);  //
  
 
  // if user is not Online then return UserOffline component
  

  
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } 
    else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          
          
          onChange={(e) => {
            searchData(e.target.value, allRestaurants);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          
          {(filteredRestaurants === null ? allRestaurants : filteredRestaurants).map(
            (restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant?.info?.id}
                  key={restaurant?.info?.id}
                >
                  {/* if we click on any restaurant card it will redirect to that restaurant menu page */}
                  <RestaurantCard {...restaurant?.info} />
                  
                </Link>
              );
            }
          )}
        </div>
      )}
    </>
  );
};
export default Body;


