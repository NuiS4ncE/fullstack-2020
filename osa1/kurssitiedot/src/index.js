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
            <h1>
              {props.course}
            </h1>
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
            <p>Total exercises: {props.points}</p> 
          </div>
      )
  }

const App = () => {
  const course = {
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
  }
 
  return (
    <div>

      <Header course={course.name} />
      <Content content={Content}
      name1={course.parts[0].name} exercises1={course.parts[0].exercises}
      name2={course.parts[1].name} exercises2={course.parts[1].exercises}
      name3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
      <Total points={course.parts[0].exercises + course.parts[1].exercises
       + course.parts[2].exercises} />
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
  /* const parts = [
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
   /* const course = 'Half Stack application development' */