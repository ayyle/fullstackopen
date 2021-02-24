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
        {props.parts} {props.exercises}
      </p>
      <p>
        {props.parts} {props.exercises}
      </p>
      <p>
        {props.parts} {props.exercises}
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
  const course = {
  name: 'Half Stack application development',
  parts : [
  {
    name: 'Fundamentals of React',
    exercises : 10
  },
  {
    name: 'Using props to pass data',
    exercises : 7
  },
  {
    name: 'State of a component',
    exercises : 14
  }
]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercise={course.parts[2].exercises} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercises} />
      
      <Total exercise1={course.parts[0].exercises} exercise2={course.parts[1].exercises} 
      exercise3={course.parts[2].exercises}/>
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))