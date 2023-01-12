import { useState } from "react";
import "./App.css";
import moonIcon from './assets/moon.png';
import sunIcon from './assets/sun.png';
import Header from "./Components/Header/Header";
import KeyPad from "./Components/KeyPad/KeyPad";

function App() {
  const[isDarkMode,setIsDarkMode]=useState(false);
   const handleKeyPress=(keyCode,key)=>{
    console.log(keyCode,key);
   }


  return (
    <div className="app"
    tabIndex="0"
    onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
    data-theme={isDarkMode? "dark" : ""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle" onClick={()=>setIsDarkMode(!isDarkMode)}>
            <div className={`app_calculator_navbar_toggle_circle ${isDarkMode ? "app_calculator_navbar_toggle_circle_active" : "" }`} />
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode"/>
          
        </div>
        <Header />
        <KeyPad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
