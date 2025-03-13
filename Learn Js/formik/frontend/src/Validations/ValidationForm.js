import * as yup from "yup";

const passwordRules =
  "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/";
export const UserSchema = yup.object().shape({
  email: yup.string().required("Required").email("Please Enter a Valid Email"),
  password: yup
    .string()
    .required("Required")
    .min(8)
    .max(20),
    // .matches(passwordRules, { message: "Please create a strong password" }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password Must Match")
    .required(),
});
