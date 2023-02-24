import { useState } from "react";
import DurationExcercise from "./components/DurationExercise/DurationExercise";
import IntensityExcercise from "./components/IntensityExcercise/IntensityExcericse";
import RepetitionExcercise from "./components/RepetitionExercise/RepetitionExercise"

export default function App() {
    const [exer, setExer] = useState("")
  return (
    
    <div className="App" style={{textAlign:"center"}}>
      <div className="buttons">
  </div>
      <header className="App-header">
        <h1>Choose a workout!</h1>
        <br></br>
        <button style={{"fontSize": "2em"}} onClick = {()=> {setExer("pushUp")}}>Pushups</button>
        <button style={{"fontSize": "2em"}}onClick = {() => {setExer("running")}}>Running</button>
        <button style={{"fontSize": "2em"}}onClick = {() => {setExer("advanced")}}>Advanced Workout</button>

      </header>
    <div>
        {exer === "pushUp" && <RepetitionExcercise />}
        {exer === "running" && <DurationExcercise />}
        {exer === "advanced" && <IntensityExcercise />}
    </div>
       
    </div>
  );
}
