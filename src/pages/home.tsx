import React from "react";

import logo from "../logo.svg";
import Nav from "../component/nav";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to <a href="https://arifinoid.fun">Arifinoid</a> PWA!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
