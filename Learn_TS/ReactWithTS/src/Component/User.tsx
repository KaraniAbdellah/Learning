import { useEffect, useState } from "react";
import type { User } from "../Context/UserContextProvider";
import UserContext from "../Context/UserContextProvider";
import Person from "./Person";
import CardUsers from "./CardUsers";

const User = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(() => [...users, user]);
  };
  const updateUser = (id: number, newUser: User): User | null => {
    users[id] = newUser;
    return newUser;
  };

  const deleteUser = (id: number): User | null => {
    const deletedUser = users[id];
    users.splice(id, id + 1);
    setUsers(() => users);
    return deletedUser;
  };

  const displayUser = (): User[] => {
    return users;
  };

  useEffect(() => {
    setUsers(() => [
      { id: 0, name: "Ahmed", age: 20, isMarried: false },
      { id: 1, name: "Nawal", age: 40, isMarried: true },
    ]);
  }, []);
  console.log(users);

  return (
      <UserContext.Provider
        value={{ users, addUser, updateUser, deleteUser, displayUser }}
      >
        {/* Any component here has access to [users, addUser, ...] */}
        <CardUsers></CardUsers>
      </UserContext.Provider>
  );
};

export default User;
