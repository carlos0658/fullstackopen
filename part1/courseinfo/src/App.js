// FullStackOpen  - part1 - excercises 1.1, 1.2, 1.3, 1.4, 1.5.
// by Carlos Massucci

import React from 'react'

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.obj.name} {props.obj.exercises}</p>
  )
}

// map on parts?
const Content = (props) => {
  return (
    <div>
    <Part obj={props.obj[0]} />
    <Part obj={props.obj[1]} />
    <Part obj={props.obj[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of excercises {props.obj[0].exercises+props.obj[1].exercises+props.obj[2].exercises}</p>
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
      <Header name={course.name} />
      <Content obj={course.parts} />
      <Total obj={course.parts} />
    </div>
  )
}

export default App
