import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Technologies} from "./components/Technologies";

function App() {
  return (
    <div className="App">
     Hello, samurai! Let's go!
        <Header/>
        <Technologies/>
    </div>
  );
}

export default App;
