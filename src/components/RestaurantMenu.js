import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTAURANTMENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo] = useRestaurantMenu(RESTAURANTMENU_URL + resId);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines } =
    restaurantInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Recommended</h2>
      <ul>
        {itemCards.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;
          return (
            <li key={id}>
              {name} - {"Rs."}
              {price / 100 || defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
