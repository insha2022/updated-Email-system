import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import {ForgotSchemas } from './index';
import { useFormik } from "formik";
import { TextField } from "@mui/material";
const initialValues = {

  email: "",
 
};

  const ForgotPassword= () => {
  const history= useNavigate();
  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:ForgotSchemas,
    onSubmit:(forgot)=>
    {    
      console.log("I am clicked",errors)
        return history("/ResetPassword") 

    },
  });
  console.log(errors);
 
  return (
    
 <div class="container">
    
 <div class="form-section">
      <h2>Forgot Password</h2>
      
    <form onSubmit={handleSubmit}>
      <TextField size="small" class="textfield"
        variant="outlined"
        type="email"
        name="email"
        helperText=
        {errors.email && touched.email?(
          <i>{errors.email}</i>
        ):null}
        placeholder="Email..."
        value={values.email}
        onChange={handleChange}/>
      <button class="btn"
        type="submit"
      >
        Submit 
      </button>
      </form>     
       </div>
    </div>
  
  );
};

export default ForgotPassword;

   