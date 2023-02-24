import { useState } from "react"
import StopWatch from "./StopWatch"

export default function DurationExcercise(props){
   let myTime = 0
  const [myTimeNew, setNewTime] = useState(myTime)
  // const [myCount2, setCount] = useState(myCount)
  // const [myCount2, setCount] = useState(myCount)
  // const [variableAssigned, functionToAssign] = useState(variableUsed)
  
  return (
    <div className="repetition-body">
      <h1 className="title">Running</h1>
    <img 
    src="https://www.freeiconspng.com/thumbs/sports-icon-png/sports-running-icon-2.png" 
    alt="pushup" 
    className="myImage"
    style={{maxHeight: "20em"}} />
    <div className="counter">
    {<StopWatch></StopWatch>}
    </div>
    </div>
    );
}