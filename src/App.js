import logo from './logo.svg';
// import './App.css';
import './css/firework.css';
import InputText from "./common/InputText";
import InputLabel from "./common/InputLabel";
import RoundButton from "./common/RoundButton";
import std_logo from "./img/std_logo.png";
import {useEffect, useState} from "react";
import axios from "axios";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>



      </header>
        <Outlet />
        <div style={{color: '#7f7f7f', width: '100%', textAlign: 'center', position: 'absolute', bottom: '0'}}>스탠다드네트웍스 운영팀</div>
    </div>
  );
}

export default App;
