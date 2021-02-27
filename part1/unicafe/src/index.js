import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({value, text}) =>{
  
   return( <div> {text} {value} </div>)
} 

const Button = ({onClick, text}) =>{
  
  return(
  <button onClick={onClick}>{text}</button>
)
  }
const Statistics = ({good, bad, neutral}) =>{

  const total = (good+bad+neutral)
if (total > 0){
  return(
  <div>
        <h1>statistics</h1>
        <table><tbody>
        <tr><Statistic value={good} text="good"/></tr>
        <tr><Statistic value={neutral} text="neutral"/></tr>
        <tr><Statistic value={bad} text="bad"/></tr>
        <tr><Statistic value={total} text="all"/></tr>
       <tr><Statistic value={(good-bad)/total} text="average" /></tr>
       <tr><Statistic value={(good*100)/total + '%'} text="positive"/></tr>
       </tbody></table>
  </div>    
)}
else{
  return(<h2>No input provided</h2>)
}
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGood = () =>{ setGood(good + 1); setAll(allClicks.concat(1))}
  const handleNeutral = () =>{setNeutral(neutral + 1); setAll(allClicks.concat(0))}
  const handleBad = () =>{setBad(bad + 1); setAll(allClicks.concat(-1))}

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text="good"/>
        <Button onClick={handleNeutral}text="neutral"/>
        <Button onClick={handleBad} text="bad"/>
      </div>
      <br></br>
      <div>
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>

  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)