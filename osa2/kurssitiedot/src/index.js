import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {

  return (
    //TODO map-funktio taulukon käsittelyssä
    <div>
      <Header course={course.name} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  )

}
const Content = (props) => {

  return (
    <div>
      <Part name={props.content[0].name} exercises={props.content[0].exercises} />
      <Part name={props.content[1].name} exercises={props.content[1].exercises} />
      <Part name={props.content[2].name} exercises={props.content[2].exercises} />
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

const Total = (props) => {
  return (
    <p>Total exercises: {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
  )
}


const Part = (props) => {
  return (
    <p>{props.name}, {props.exercises} </p>
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
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
