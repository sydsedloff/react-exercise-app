import { useState } from "react"
var myCount = 0
var intense = 0
var effort = 0
var heartRate = 70
var heartCounter = 5
export default function IntensityExcercise(exerciseName){
  
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
    const [intense2, setIntense] = useState(intense)

  function intensityIncrease(){
    intense++
    console.log(intense)
    setIntense(intense)

  }
  function resetIntensity (){
    intense = 0
    setIntense(intense)
  }
  const [effort2, setEffort] = useState(effort)
  function effortExerted(){
    if(myCount2 > 0 && intense > 0){
    effort = myCount2 * intense
    setEffort(effort)
    }
  }

  function resetEffort(){
    effort = 0
    setEffort(effort)
  }
    const [heart, setHeart] = useState(heartRate)
 function calculateHeartRate(){
if (myCount2 > 0 && intense2 > 0){
    console.log(heartRate + " This is heartRate before logic")
    heartRate = 100 + (Math.floor(Math.random() * heartCounter)) + myCount2
    console.log(((Math.random) % heartCounter) + " seeing if this is a zero")
    console.log(heartCounter + " this is the heartCounter...is it going up??")
    if (heartRate > 180){
        heartRate = 180
    }
        console.log(heartRate + " This is heartRate after logic")

    setHeart(heartRate)
    }
    heartCounter++
    
  }
  

  

  return (
    <div className="repetition-body" style={{width:"100vw", textAlign:"center"}}>
      <h1 className="title">Advanced Workout</h1>
    <img 
    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1795235/running-track-clipart-sm.png" 
    alt="pushup" 
    className="myImage"
    style={{maxHeight: "20em"}} />
    <div className="counter" style={{margin:"auto"}}>
      <button style={{"fontSize": "3em"}}onClick={countUp}>Finish Rep</button>
      <p style={{fontSize:"7em", margin:"auto", fontFamily:"monospace"}}>{myCount2}</p>
      <button style={{"fontSize": "3em"}}onClick={resetCount}>Reset Reps</button>
       <button style={{"fontSize": "3em"}}onClick={intensityIncrease}>Increase Intensity</button>
      <p style={{fontSize:"7em", margin:"auto", fontFamily:"monospace"}}>{intense2}</p>
      <button style={{"fontSize": "3em"}}onClick={resetIntensity}>Reset Intensity</button>
    <button style={{"fontSize": "3em"}}onClick={effortExerted}>Calculate Calories</button>
        <p style={{fontSize:"7em", margin:"auto", fontFamily:"monospace"}}>{effort2}</p>
    <button style={{"fontSize": "3em"}}onClick={resetEffort}>Reset Effort</button>
    <button style={{"fontSize": "3em"}}onClick={calculateHeartRate}>calculate Heart Rate</button>
        <p style={{fontSize:"7em", margin:"auto", fontFamily:"monospace"}}>{heart}</p>



      
    </div>
    </div>
    );
}
