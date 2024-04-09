import './css/firework.css';
import {Outlet} from "react-router-dom";

function App() {


  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}




      {/*</header>*/}
        <Outlet />
        <div style={{color: '#7f7f7f', width: '100%', textAlign: 'center', position: 'absolute', bottom: '0'}}>스탠다드네트웍스 운영팀</div>
    </div>
  );
}

export default App;
