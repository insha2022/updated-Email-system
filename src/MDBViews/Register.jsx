import React, { useState } from "react";
import { REGISTER } from "../graphql/register";
import { useMutation } from "@apollo/client";
import logo from "../logo.jpg";
import { useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '../style/style.css'

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';


const Register = () => {
  const history = useNavigate(); 
  const initialValues = {
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [register, setRegister] = useState(initialValues);
  const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log(useNavigate)
    setRegister({
      ...register,
      [name]: value,
    });
  };
  const [registerUser] = useMutation(REGISTER);
  const submitHandler = async (event) => {
   history("/Login")

    registerUser({
          variables: {
            username: register.userName,
            firstName: register.firstName,
            lastName: register.lastName,
            email: register.email,
            password: register.password,
            confirmPassword: register.confirmPassword,
          },
       });
    console.log("message")
  }
  
  return (

<MDBContainer>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

      <center> <img class="img" src={logo} alt="logo" /> </center> 

        <h2 className="fw-bold mb-2 text-center">Register</h2>
    

        <MDBInput wrapperClass='mb-4 w-100' label='User Name' type='text' name="userName" size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='First Name' type='text' name="firstName" size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Last Name' type='text' name="lastName" size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Email' type='email' name="email" size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Password' type='password' name="password" size="lg"/>
        <MDBInput wrapperClass='mb-4 w-100' label='Confirm Password' type='password' name="confirmPassword" size="lg"/>

    
        <MDBBtn size='lg' onClick={registerUser({
            variables: {
              username: register.userName,
              firstName: register.firstName,
              lastName: register.lastName,
              email: register.email,
              password: register.password,
              confirmPassword: register.confirmPassword,
            },
          })}>
          Register
        </MDBBtn>
        <p></p>

        <p className="text-black-50 mb-3">Already have an account? <MDBBtn onClick={()=> history("/Login")}>Login Here</MDBBtn></p> 

        <hr className="my-4" />

      </MDBCardBody>
    </MDBCard>

  </MDBCol>



  
</MDBRow>

</MDBContainer>

  
  );
};

export default Register;
