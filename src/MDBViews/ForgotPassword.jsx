import React, { useState } from "react";
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


const ForgotPassword = () => {

const history = useNavigate(); 
      history("/Login")
  
  return (

<MDBContainer>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
      <MDBCardBody className='p-5 w-100 d-flex flex-column'>

      <center> <img class="img" src={logo} alt="logo" /> </center> 

        <h2 className="fw-bold mb-2 text-center">Forgot Password</h2>
        <p class="headText">Please enter your email id to reset password!</p>


        <MDBInput wrapperClass='mb-4 w-100' label='Email' type='email' name="email" size="lg"/>
      
    
        <MDBBtn size='lg'>
          Reset Password
        </MDBBtn>
        <p></p>

        <hr className="my-4" />

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>

  
  );
};

export default ForgotPassword;
