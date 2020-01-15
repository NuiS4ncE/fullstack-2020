import React from 'react'
import ReactDOM from 'react-dom'


const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name}, {props.exercises} </p>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total points: {props.parts[0].exercises + props.parts[1].exercises
      + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
const course = 'Half Stack application development'
const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
] 


  return (
    <div>

      <Header course={course.name} />
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

/* const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 */
/* const part1 = {
   name: 'Fundamentals of React',
   exercises: 10
 }
 const part2 = {
   name: 'Using props to pass data',
   exercises: 7
 }
 const part3 = {
   name: 'State of a component',
   exercises: 14
 } */

/*  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  } */