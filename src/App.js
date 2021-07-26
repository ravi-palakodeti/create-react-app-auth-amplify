import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Amplify from 'aws-amplify';

import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return (
   <React.Fragment>
    <Layout>
     <NavigationBar></NavigationBar>
    </Layout>
   </React.Fragment>
  );
 }

export default withAuthenticator(App);
// export default App;
