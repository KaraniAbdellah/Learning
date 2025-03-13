import * as yup from "yup";

export const usersSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    password: yup.string().min(6).max(10)
});
