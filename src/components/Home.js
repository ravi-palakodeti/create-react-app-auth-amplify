import React from 'react';
import { Chatter } from './Chatter';

export const Home = () => (
 <React.Fragment>
  <div className="jumbotron jumbotron-image">
   <h1 className="display-4">Octank Airlines</h1>
   <p className="lead">Changing Latitude to change Attitude</p>
   <hr className="my-4"></hr>
   <p>Customer Experience Modernization using AWS Services.</p>
   <Chatter></Chatter>
  </div>
 </React.Fragment>
)
