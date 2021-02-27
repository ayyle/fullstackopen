import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = ({onClick, text}) =>{
  
  return(
  <button onClick={onClick}>{text}</button>
)
  }


const App = (props) => {
  let [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const handleClick = () => {
    function getRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
    setSelected(selected = getRandom(0, 4))
    console.log(selected, points)
  }
  
  
  const handleVote = () =>{
    const _points = [...points]
    _points[selected] += 1
    setPoints(_points) 
    }
    
  

  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      {
      <p>Has {points[selected]}  votes</p>
      }
     <br></br>
      <Button onClick ={handleVote} text="vote"/>
      <Button onClick={handleClick} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)