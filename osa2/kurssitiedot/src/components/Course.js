import React from 'react'

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
        (a, b) => a + b.exercises, 0)} exercises</b></p>
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

  export default Course