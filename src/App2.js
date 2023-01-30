/* [app3] unmount */

import './App.css';
import { useState} from "react";
import Timer from "./component/Timer"

function App2() {
  const [showTimer, setShowTimer]=useState(false)
  return (
    <div className="App">

      {showTimer && <Timer />}{/*showTimer 참이면 Timer 보여줌(실행)*/}
      <button className="btn" onClick={() => {setShowTimer(!showTimer)}}>Toggle</button>
    </div>
  );
}

export default App2;
