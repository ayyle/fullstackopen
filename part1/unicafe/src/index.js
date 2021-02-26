import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({counter, text}) =>{
  
   return( <div> {text} {counter} </div>)
} 

const Button = ({handleClick, text}) =>(
  <button onClick={handleClick}> {text} </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good"/>
        <Button handleClick={() => setNeutral(neutral + 1)}text="neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      </div>
      <div>
        <h1>statistics</h1>
        <Display counter={good} text="good"/>
        <Display counter={neutral} text="neutral"/>
        <Display counter={bad} text="bad"/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)