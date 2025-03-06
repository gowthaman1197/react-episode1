import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const User = () => {
  const [users] = useRestaurantMenu(
    "https://api.github.com/users/gowthaman1197"
  );
  if (users === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <img src={users.avatar_url} />
      <h1>{users.name}</h1>
      <p>{users.bio}</p>
    </>
  );
};

export default User;
