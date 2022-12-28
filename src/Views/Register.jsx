import React, { useState } from "react";
import { REGISTER } from "../graphql/register";
import { useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signUpSchema } from './index';
import { Input, TextField } from "@mui/material";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(register)=>
    {    
      console.log("I am clicked",errors)
        return history("/Login")
       registerUser({
        variables: {
          // username: values.userName,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
     });

    },
  });
  console.log(errors);
 
  const history = useNavigate(); 
  const [registerUser] = useMutation(REGISTER)
  return (



 <div class="container">
    
    <div class="form-section">
     
      <form onSubmit ={handleSubmit} >


      <h2>Sign Up</h2>

    
      <TextField size="small" class="textfield"
        variant="outlined"
        type="text"
        name="firstName"
        helperText=
        {errors.firstName && touched.firstName?(
          <i>{errors.firstName}</i>
        ):null}
        placeholder="First Name..."
        value={values.firstName}
        onChange={handleChange}/>

      
      

      <TextField size="small" class="textfield"
        variant="outlined"
        type="text"
        name="lastName"

        helperText={errors.lastName && touched.lastName?(
          <i>{errors.lastName}</i>
        ):null}
        placeholder="Last Name..."
        value={values.lastName}
        onChange={handleChange}
      />
    
    
      <TextField size="small" class="textfield"
        variant="outlined"
        type="email"
        name="email"
        placeholder="Email..."
        helperText={errors.email && touched.email?(
          <i>{errors.email}</i>
 
        ):null}
        value={values.email}
        onChange={handleChange}
      />
      
      
      <TextField size="small" class="textfield"
        variant="outlined"
        type="password"
        name="password"
        placeholder="Password..."
        helperText={errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
        value={values.password}
        onChange={handleChange}
      />
      <TextField size="small" class="textfield"
        variant="outlined"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password..."

        helperText={errors.confirmPassword && touched.confirmPassword?(
          <i>{errors.confirmPassword}</i>
        ):null}
        value={values.confirmPassword}
        onChange={handleChange}
      />
      <button class="btn"
        type="submit"
        // onClick={() => {
        //   registerUser({
        //     variables: {
        //       username: values.userName,
        //       firstName: values.firstName,
        //       lastName: values.lastName,
        //       email: values.email,
        //       password: values.password,
        //       confirmPassword: values.confirmPassword,
        //     },
        //  });
       // }}
      >
        Register
      </button>
  
      </form>
      <p>Already have an account? <b class="link" onClick={()=> history("/Login")}> Login </b> </p> 
    </div>
    </div>
  
  );
};

export default Register;
