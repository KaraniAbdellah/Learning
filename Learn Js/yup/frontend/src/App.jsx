import { usersSchema } from "./Validations/UserValidations";

function App() {
  const createUser = async (event) => {
    event.preventDefault();
    console.log(event.target);
    let formData = {
      name: event.target.querySelector(".name").value,
      email: event.target.querySelector(".email").value,
      password: event.target.querySelector(".password").value
    }
    console.log(formData);
    const isValid = await usersSchema.isValid(formData);
    console.log(isValid);
  }
  
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <form onSubmit={(e) => createUser(e)} action="" className="bg-gray-200 p-5 rounded-md flex flex-col">
        <input
          className="mb-3 p-2 name outline-none focus:outline-blue-500 focus:outline-2 focus:rounded-sm rounded-sm"
          type="text"
          placeholder="Name..."
        />
        <input
          className="mb-3 email p-2 outline-none focus:outline-blue-500 focus:outline-2 focus:rounded-sm rounded-sm"
          type="email"
          placeholder="Email@exampl.com"
        />
        <input
          className="mb-3 password p-2 outline-none focus:outline-blue-500 focus:outline-2 focus:rounded-sm rounded-sm"
          type="password"
          placeholder="Password123"
        />
        <input
          className="p-2 bg-gray-300 cursor-pointer outline-none focus:outline-blue-500 focus:outline-2 focus:rounded-sm rounded-sm"
          type="submit"
        />
      </form>
    </div>
  );
}

export default App;
