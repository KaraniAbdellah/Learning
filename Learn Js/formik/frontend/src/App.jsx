import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });
  console.log(formik);

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <form className="bg-gray-100 p-6 rounded-md">
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          className="p-2 border-2 border-blue-600 rounded-md"
          type="email"
          id="email"
          placeholder="Enter Your Email..."
        />
        <label className="block mb-1" htmlFor="email">
          Password
        </label>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          className="p-2 border-2 border-blue-600 rounded-md"
          type="Password"
          id="Password"
          placeholder="Enter Your Password..."
        />
        <input type="submit" className="block w-full hover:bg-gray-300 transition-all border-2 border-blue-600 cursor-pointer my-2 bg-gray-200 p-2 rounded-md" />
      </form>
    </div>
  );
}
