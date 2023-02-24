import { useState } from "react"
var myCount = 0
export default function RepetitionExcercise(exerciseName){
  
  function resetCount (){
    myCount = 0
    setCount(myCount)
  }
  const [myCount2, setCount] = useState(myCount)
  function countUp(){
    myCount++
    console.log(myCount)
    setCount(myCount)
  } 
  
  return (
    <div className="repetition-body" style={{width:"100vw", textAlign:"center"}}>
      <h1 className="title">Push Ups</h1>
    <img 
    src="https://cdn-icons-png.flaticon.com/512/76/76861.png" 
    alt="pushup" 
    className="myImage"
    style={{maxHeight: "20em"}} />
    <div className="counter" style={{margin:"auto"}}>
      <button style={{"fontSize": "3em"}}onClick={countUp}>Finish Rep</button>
      <p style={{fontSize:"7em", margin:"auto", fontFamily:"monospace"}}>{myCount2}</p>
      <button style={{"fontSize": "3em"}}onClick={resetCount}>Reset Reps</button>
    </div>
    </div>
    );
}
