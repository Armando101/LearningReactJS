import { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
      <h4>User: {userContext.name}</h4>
    </div>
  );
};
