import React, { useState } from "react";
 import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ResetSchemas } from './index';
import { TextField } from "@mui/material";
const initialValues = {
  password: "",
  confirmPassword:""
 
};

const ResetPassword= () => {
  const history= useNavigate();

  const {  values,errors, touched,handleSubmit,handleChange}= useFormik({
    initialValues:initialValues,
    validationSchema:ResetSchemas,
    onSubmit:(Reset)=>
    {    
      console.log("I am clicked",errors)
        return history("/Login")
    },
  });
  console.log(errors);
 
  return (
    <div class="container">
    
 <div class="form-section">

      <h2>ResetPassword</h2>
    <form onSubmit={handleSubmit}>
      
      <TextField size="small" class="textfield"
        type="password"
        name="password"
        helperText=
        {errors.password && touched.password?(
          <i>{errors.password}</i>
        ):null}
        placeholder="Password..."
        value={values.password}
        onChange={handleChange}/> 
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
      >
        ChangePassword 
      </button>
      </form>
      </div>
    </div>
  
  );
};

export default ResetPassword;

   