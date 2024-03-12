
import { useState } from "react";
import MainScreen from "./components/MainScreen.jsx";
import OpenScreenAnimation from "./components/OpenScreenAnimation.jsx";
import EndScreen from "./components/EndScreen.jsx";
import "./index.css";
import IntiligencePage from "./components/IntiligencePage.jsx";
import ChoosenPage from "./components/ChoosenPage.jsx";

function App() {

  const [currentScreen, setcurrentScreen] = useState(0);
  const [endList, setEndList] = useState([]);

  function changeScreen() {
    setcurrentScreen(currentScreen + 1);
    // console.log(updatedList);
  };
  function IntiligenceScreen() {
    setcurrentScreen(currentScreen + 1)
  }
  function changeScreenChoosen(toPage){
    setcurrentScreen(toPage);
  }
  return <main id="openScreen">

    {currentScreen === 0 ?
      <OpenScreenAnimation changeScreen={()=>{
        setcurrentScreen(1)
      }}  /> :
      currentScreen === 1 ? <ChoosenPage changePage={(changeScreenChoosen)}/> : 
      currentScreen === 2 ?<MainScreen changeScreen={()=>{
        setcurrentScreen(3)
      }} /> :
        currentScreen === 3 ? <EndScreen updateList={endList} toIntiligencePage={()=>{
          setcurrentScreen(4)
        }}/> :
          currentScreen === 4 ? <IntiligencePage changeScreen={()=>{
            setcurrentScreen(1);
          }}/> :
            null
    }


  </main>

}

export default App;

