import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {

  return (
    //TODO map-funktio taulukon käsittelyssä
    <div>
      <Header course={course.name} />
      <Content content={course} />
      <Total total={course.parts} />
    </div>
  )

}

const Content = (props) => {

  return (
    <div>
      <Part course={props.content} />
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


const Part = ( props) => {
  return (
    <div>
      <ol>
      {props.course.parts.map(course => <li>
        {course.name} {course.exercises}
      </li>)}
    </ol> 
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  const result = course.parts.map(course => course.name)
  console.log(result)
  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
