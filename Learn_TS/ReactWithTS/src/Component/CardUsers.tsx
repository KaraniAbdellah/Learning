import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContextProvider";


const CardUsers = () => {
  const { users, addUser, updateUser, deleteUser, displayUser } =
    useContext(UserContext);
  return (
    <div>
      {users && users?.length != 0
        ? users.map((user, index) => {
            return (
              <p key={index}>
                name: {user.name}, age: {user.age}, Status:{" "}
                {user.isMarried ? "Married" : "Single"}
              </p>
            );
          })
        : "no user found"}
    </div>
  );
};

export default CardUsers;
