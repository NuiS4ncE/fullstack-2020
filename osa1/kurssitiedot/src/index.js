import React from 'react'
import ReactDOM from 'react-dom'


const Content = (props) => {
  return (
    <div>
      <div>
        <div>
          {props.name}, {props.exercises}
        </div>
        {props.name2}, {props.exercises2}
      </div>
      {props.name3}, {props.exercises3}
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
/*
const Part = (props) => {
  return (
    <p>{props.name}, {props.exercises} </p>
  )
}
*/
const Total = (props) => {
  return (
    <div>
      <p>Total exercises: {props.exercises1 + props.exercises2
        + props.exercises3}</p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>

      <Header course={course} />
      <Content content={Content}
        name={part1} exercises={exercises1}
        name2={part2} exercises2={exercises2}
        name3={part3} exercises3={exercises3} />
      <Total total={Total}
        exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}
      />
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
/*const course = 'Half Stack application development'
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
] */