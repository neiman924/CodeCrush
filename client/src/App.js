import React from "react";

import './assets/vendors/animate/animate.css';
import './assets/vendors/themify-icons/css/themify-icons.css';
import './assets/css/codecrush.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup2';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Head from "./components/Head";
import Footer from "./components/Footer";
import About from './pages/About';
import Learn from './pages/Learn.js';
import Reviews from './pages/Reviews';
import Matching from "./pages/Matching";
import UserProfile from './pages/UserProfile'
import EditProfile from './components/EditProfile'

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (

    <ApolloProvider client={client}>
      <Router>
        <Head />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/Learn"
            element={<Learn />}
          />
          <Route
            path="/Reviews"
            element={<Reviews />}
          />
          <Route
            path="/matching"
            element={<Matching />}
          />
          <Route
            path="/userprofile"
            element={<UserProfile />}
          />
          <Route
            path="/editprofile"
            element={<EditProfile />}
          />
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
