import React from 'react'
import ReactDOM from 'react-dom'
const Header = (props) => {
  console.log(props)
return (
    <h1>
      {props.course}
    </h1>
)
}
const Content = (props) => {
  console.log(props)
return(
  <div>
    <p>
        {props.part1} {props.exercise1}
      </p>
      <p>
        {props.part2} {props.exercise2}
      </p>
      <p>
        {props.part3} {props.exercise3}
      </p>
  </div>
)
}
const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}
      </p>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name: 'State of a component',
    exercises : 14
  }

  return (
    <div>
      <Header course={course}/>
      <Part part={part1.name} exercise={part1.exercises} />
      <Part part={part2.name} exercise={part2.exercises} />
      <Part part={part3.name} exercise={part3.exercises} />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))