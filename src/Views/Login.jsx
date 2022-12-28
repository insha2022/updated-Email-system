import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { signUpSchemas } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const history = useNavigate();
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchemas,
    onSubmit: (Login) => {
      console.log("I am clicked", errors)
      login({
        variables: {
          email: values.email,
          password: values.password,
        },
      }).then(() => {
        return history("/Loggedin")
      })
    },
  });
  console.log(errors);
  const [login] = useMutation(LOGIN);
  return (
   
 <div class="container">
    
 <div class="form-section">

        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <TextField size="small" class="textfield"
            variant="outlined"
            type="email"
            name="email"
            helperText=
            {errors.email && touched.email ? (
              <p>{errors.email}</p>
            ) : null}
            placeholder="Email..."
            value={values.email}
            onChange={handleChange} />
          <TextField size="small" class="textfield"
            type="password"
            name="password"
            helperText=
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
            placeholder="Password..."
            value={values.password}
            onChange={handleChange} />
          <button class="btn"
            type="submit"
          >
            Submit
          </button>
        </form>
        <p class="link margin" onClick={()=> history("/ForgotPassword")}> Forget Password </p> 
      
      </div>
    </div>
  );
};

export default Login;

