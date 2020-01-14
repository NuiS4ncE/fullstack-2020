import React from 'react'
import ReactDOM from 'react-dom'


const Content = (props) => {
    return (
      <div>
        <Part part={props.party1} exercises={props.exercisesy1}/>
        <Part part={props.party2} exercises={props.exercisesy2}/>
        <Part part={props.party3} exercises={props.exercisesy3}/>
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
          <p>Part number: {props.part}, number of points: {props.exercises} </p>
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
  const part1 = {
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
  }
  return (
    <div>
      <Header course={course} />
      <Content content={Content}
      party1={part1.name} exercisesy1={part1.exercises}
      party2={part2.name} exercisesy2={part2.exercises}
      party3={part3.exercises} exercisesy3={part3.exercises} />
      <Total total={Total} 
      points={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))