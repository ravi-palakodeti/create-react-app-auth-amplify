import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';

import 'bootstrap-css-only/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';

const baseUri = "https://64layz7cfb.execute-api.us-east-2.amazonaws.com/Stage/"

export const Registerer = (props) => {

 const [values, setValues] = useState({
  name: '',
  org: '',
  category: '',
  zip: ''
 });

 const onNameInputChange = (e) => {
  e.persist();
  setValues((values) => ({
   ...values, name: e.target.value
  }))
 }

 const onOrgInputChange = (e) => {
  e.persist();
  setValues((values) => ({
   ...values, org: e.target.value
  }))
 }

 const onOrgTypeInputChange = (e) => {
  e.persist();
  setValues((values) => ({
   ...values, orgtype: e.target.value
  }))
 }

 const onZipInputChange = (e) => {
  e.persist();
  setValues((values) => ({
   ...values, zip: e.target.value
  }))
 }

 const submitHandler = (event) => {
  event.preventDefault();
  const requestOptions = {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify(values)
  };

  fetch(baseUri + "register", requestOptions)
   .then(response => response.json())
   .then(data => console.log(data))

  setValues((values) => ({
   ...values, name: '', org: '', orgtype: '', zip: ''
  }))
 }

 return (
  <div>
   <form onSubmit={submitHandler} noValidate>
    <MDBContainer>
     <MDBRow>
      <MDBCol>
       <MDBCard>
        <div className="header blue lighten-4">
         <MDBRow className="d-flex justify-content-center">
          <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
           {props.title}
          </h3>
         </MDBRow>
        </div>
        <MDBCardBody className="mx-4 mt-4">
         <MDBInput
          label="Name"
          onChange={onNameInputChange}
          value={values.name}
          group type="text"
          validate />
         <MDBInput
          label="Organization Name"
          onChange={onOrgInputChange}
          value={values.org}
          group type="text"
          name="user[org]"
          validate />
         <select value={values.category} onChange={onOrgTypeInputChange} className="browser-default custom-select">
          <option>Category</option>
          <option value="1">Producer</option>
          <option value="2">Consumer</option>
          <option value="3">Volunteer</option>
         </select>
         <MDBInput
          value={values.zip}
          onChange={onZipInputChange}
          label="Zip Code"
          group type="text"
          name="user[zip]"
          validate />
         <div className="text-center mb-4 mt-5">
          <MDBBtn
           color="primary"
           type="submit"
           className="btn-block z-depth-2"
          >
           Submit
        </MDBBtn>
         </div>
        </MDBCardBody>
       </MDBCard>
      </MDBCol>
     </MDBRow>
    </MDBContainer>
   </form>
  </div>
 )
};