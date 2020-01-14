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
      party1={part1} exercisesy1={exercises1}
      party2={part2} exercisesy2={exercises2}
      party3={part3} exercisesy3={exercises3} />
      <Total total={Total} 
      points={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))