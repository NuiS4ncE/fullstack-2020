import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {

  return (
    <div>
      <Header course={course.name} />
      <Content content={course} />
      <Total total={course} />
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
    <p><b>total of {props.total.parts.reduce(
      (a, b=props.total.parts) => a + b.exercises, 0)} exercises</b></p>
  )
}


const Part = (props) => {
  return (
    <div>
        {props.course.parts.map(course => <p key={course.id}>
          {course.name} {course.exercises}
        </p>)}      
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
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
