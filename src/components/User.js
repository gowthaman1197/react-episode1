import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const User = () => {
  const [users] = useRestaurantMenu(
    "https://api.github.com/users/gowthaman1197"
  );
  const onlineStatus = useOnlineStatus();

  if (users === null) {
    return <p>Loading...</p>;
  }
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  return (
    <>
      <img src={users.avatar_url} />
      <h1>{users.name}</h1>
      <p>{users.bio}</p>
    </>
  );
};

export default User;
