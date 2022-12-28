import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {LOGIN } from "../graphql/login";
import { useMutation } from "@apollo/client";
import logo from "../logo.jpg";
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


const Login= () => {
  const navigate = useNavigate();
  const permission = true
    const initialValues = {
      email: "",
      password: "",
     
    };

    const [Login, setLogin] = useState(initialValues);
    const changeHandler = (event) => {
    const { name, value } = event.target;
    console.log("value", value, "event", event.target.name, "name", name);
    setLogin({
      ...Login,
      [name]: value,
    });
  };
  const [login] = useMutation(LOGIN);
  
  return (
    
    <MDBContainer>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

            <center> <img class="img" src={logo} alt="logo" /> 
           
            </center> 

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p class="headText">Please enter your email and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Email address' type='email' id= "email" name="email" size="lg"/>
              <MDBInput wrapperClass='mb-4 w-100' label='Password' type='password' id="password" name="password" size="lg"/>

          
              <MDBBtn size='lg' onClick={login({
            variables: {
              email: Login.email,
              password: Login.password,
            },
          })}>
                Login
              </MDBBtn>
              <p></p>
              <div class="forgot" onClick={()=> navigate("/ForgotPassword")}>forgot password?</div>
              <p></p>

              <p className="text-black-50 mb-3">Not registered yet?  <MDBBtn onClick={()=> navigate("/Register")}>Register</MDBBtn> </p> 

              <hr className="my-4" />

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
        
      </MDBRow>

    </MDBContainer>

  
  );
};

export default Login;

   
