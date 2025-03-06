import { useState, useEffect } from "react";
const useRestaurantMenu = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchRestaurantsMenu();
  }, [url]);

  const fetchRestaurantsMenu = async () => {
    const data = await fetch(url);
    const json = await data.json();
    setData(json);
  };

  return [data];
};

export default useRestaurantMenu;
