import { useFormik } from "formik";
import { UserSchema } from "./Validations/ValidationForm";

export default function App() {
  const onSubmit = (values, actions) => {
    console.log("Form Submitted!!!");
    console.log(values);
    console.log(actions); // actions help intercet with from
    actions.resetForm();
  };

  // const formik = useFormik({ // we use formik.values || formik.handleChange()
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: UserSchema,
    onSubmit,
  });

  console.log(errors.email);

  return (
    <div className="w-[100%] h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="bg-gray-100 p-6 rounded-md w-[400px] flex justify-center flex-col"
      >
        <label className="block mb-1" htmlFor="email">
          Email
        </label>
        <input
          value={values.email}
          onChange={handleChange}
          type="email"
          id="email"
          onBlur={handleBlur}
          placeholder="Enter Your Email..."
          className={`${
            errors.email && touched.email ? "input-error" : ""
          } p-2 focus:outline-none border-2 border-blue-600 rounded-md`}
        />
        {errors.email && touched.email && (
          <p className="error mb-3 text-red-600">{errors.email}</p>
        )}

        <label className="block mb-1" htmlFor="password">
          Password
        </label>
        <input
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.password && touched.password ? "input-error" : ""
          } p-2 focus:outline-none border-2 border-blue-600 rounded-md`}
          type="password"
          id="password"
          placeholder="Enter Your Password..."
        />
        {errors.password && touched.password && (
          <p className="error mb-3 text-red-600">{errors.password}</p>
        )}

        <label className="block mb-1" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          } p-2 focus:outline-none border-2 border-blue-600 rounded-md`}
          type="password"
          id="confirmPassword"
          placeholder="Enter Your Password..."
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="error mb-3 text-red-600">{errors.confirmPassword}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="block w-full hover:bg-gray-300 transition-all border-2 border-blue-600 cursor-pointer my-2 bg-gray-200 p-2 rounded-md"
        >
          submit
        </button>
      </form>
    </div>
  );
}
