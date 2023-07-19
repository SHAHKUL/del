import * as YUP from "yup";

export const signupSchema = YUP.object({
  name: YUP.string().min(2).max(25).required("enter ur name"),
  email: YUP.string().email().required("enter ur email"),
  password: YUP.string().min(6).required("enter ur password"),
  confirm_password: YUP.string()
    .required()
    .oneOf([YUP.ref("password"), null], "passwor must match"),
});
