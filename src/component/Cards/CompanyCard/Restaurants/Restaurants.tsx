import {useEffect, useState} from "react";
import axios from "axios";

import styles from './Restaurants.module.css';

const Restaurants = ({companyRestaurants}: any) => {

  console.log(companyRestaurants);

  const [restaurantIds, setRestaurantIds] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    companyRestaurants.forEach((e: any) => {
      getRestaurantData(e.id)
    })
  }, [companyRestaurants]);

  const getRestaurantData = (id: number) => {
    axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`, {})
      .then(response => {
        // @ts-ignore
        if (response?.data?.data?.attributes && !restaurantIds.includes(response?.data?.data?.id)) {
          const actualRestaurant = {...response?.data?.data?.attributes, id: response?.data?.data?.id};
          const newRestaurants = [...restaurants, actualRestaurant];

          // @ts-ignore
          setRestaurantIds([...restaurantIds, response?.data?.data?.id]);

          // @ts-ignore
          setRestaurants(newRestaurants);
        }
      }).catch(error => {
      console.log(error);
    });
  }

  console.log(restaurants);

  return (
    <div className={styles.restaurantsWrapper}>{restaurants.map((rest:any) => {
      return (
        <div className={styles.restaurant}>
          <div className="restaurant-image__wrapper">
            <img src={'http://localhost:1337'+rest.Image.data[0].attributes.url} alt=""/>
          </div>
        </div>
      );
    })}</div>
  );
}

export default Restaurants;