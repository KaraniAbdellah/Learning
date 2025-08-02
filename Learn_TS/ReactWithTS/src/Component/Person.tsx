// Defining Props in Typescript

interface Person {
  name: string;
  age: number;
  isMarried?: boolean;
}

const Person = (person: Person) => {
  // const fetchUser = function(): Person {
  //     return ({ name: "John", age: 30, isMarried: true });
  // }
  const fetchUser = (): Person => ({ name: "John", age: 30, isMarried: true });
  const user: Person = fetchUser();

  return (
    <div>
      {person.name}
      {person.age}
      {person.isMarried ? "Married" : "Single"}
      <hr />
      <hr />
      {user.name}
      {user.age}
      {user.isMarried ? "Married" : "Single"}
    </div>
  );
};

export default Person;
