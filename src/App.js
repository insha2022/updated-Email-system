
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Login from "./Views/Login";
import Register from "./Views/Register";
import ForgotPassword from "./Views/ForgotPassword";
import ResetPassword from "./Views/ResetPassword";
import Home from "./Views/Home";
import Users from "./Views/Users";
import Compose from "./Views/Compose";
import Loggedin from "./Views/Loggedin";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './style/style.css'

// changes in App.js
function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:
      "http://emailproject-env.eb-pwtpkn6y.ap-south-1.elasticbeanstalk.com/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="Loggedin" element={<Loggedin />}>
              <Route path="Home" element={<Home />} />
              <Route path="Users" element={<Users />} />
              <Route path="Compose" element={<Compose />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
