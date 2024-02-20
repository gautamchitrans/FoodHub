import { useEffect, useState } from "react";

const useResData = (API_URL) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  

  
  useEffect(() => {
    getRestaurants();
  }, []);

  
  async function getRestaurants() {
    
    try {
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } 
      else {
        const json = await response.json();
 
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }

        const resData = await checkJsonData(json);
        setAllRestaurants(resData);
        
      }
    } catch (err) {
      console.error(err); 
    }
  }
  
  return [allRestaurants]; 
};

export default useResData;

