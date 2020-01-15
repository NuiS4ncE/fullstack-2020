import React from 'react'
import ReactDOM from 'react-dom'


const Content = (props) => {
    return (
      <div>
        <Part name={props.name1} exercises={props.exercises1} />
        <Part name={props.name2} exercises={props.exercises2}/>
        <Part name={props.name3} exercises={props.exercises3}/>
      </div>
    )
  }

  const Header = (props) => {
      return(
          <div>
            {props.course}
         </div> 
      )
  }

  const Part = (props) => {
      return(
          <p>{props.name}, {props.exercises} </p>
      )
  }

  const Total = (props) => {
      return(
          <div>
            <p>Total points: {props.points}</p> 
          </div>
      )
  }

const App = () => {
  const course = 'Half Stack application development'
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

      <Header course={course} />
      <Content content={Content}
      name1={parts[0].name} exercises1={parts[0].exercises}
      name2={parts[1].name} exercises2={parts[1].exercises}
      name3={parts[2].name} exercises3={parts[2].exercises}/>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))