import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter, text}) =>{
  
   return( <div> {text} {counter} </div>)
} 

const Button = ({onClick, text}) =>{
  
  return(
  <button onClick={onClick}> {text} </button>
)
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
  const getAvg = (allClicks) => {
    const total =allClicks.reduce((acc, c) => acc+ c, 0);
    return total / allClicks.length;
  }



  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={handleGood} text="good"/>
        <Button onClick={handleNeutral}text="neutral"/>
        <Button onClick={handleBad} text="bad"/>
      </div>
      <div>
        <h1>statistics</h1>
        <Display counter={good} text="good"/>
        <Display counter={neutral} text="neutral"/>
        <Display counter={bad} text="bad"/>
        <Display counter={allClicks.length} text="all"/>
        <Display counter={getAvg(allClicks)} text="average" />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)