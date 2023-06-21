import { useState } from "react";

import "./css/App.css";
import "./css/reset.css";

import { makeRequest } from "./api/api";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { ChatMessage } from "./components/ChatMessage/ChatMessage";

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>App Works</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <ChatMessage></ChatMessage> */}
      </header>
    </div>
  );
}

export default App;
