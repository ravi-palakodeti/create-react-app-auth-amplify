import React from 'react';
import { Container } from 'react-bootstrap';
import { Chatter } from './Chatter';
export const Chat = () => (
 <React.Fragment>
  <Container>
   <div className="rowComponents">
    <div className="base-container">
     <h2>Donation Center</h2>
     <p>We apprecite the generous donation. This will be put to good use</p>
    </div>
    <Chatter title="Donate to Connected Hub"></Chatter>
   </div>
  </Container>
 </React.Fragment>

)