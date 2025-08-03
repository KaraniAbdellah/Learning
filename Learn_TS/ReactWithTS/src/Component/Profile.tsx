// Convert Js componenet to Ts componenet
import React from 'react';


interface User {
    name: string,
    age: number,
    isStudent: boolean
}
function Profile() {
  const user: User = {
    name: "Youssouf",
    age: 22,
    isStudent: true
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>{user.isStudent ? "Student" : "Not a student"}</p>
    </div>
  );
}

export default Profile;
