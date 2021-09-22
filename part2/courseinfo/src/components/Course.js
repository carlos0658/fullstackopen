// FullStackOpen  - part2 - excercises 2.5
// by Carlos Massucci
// Note: model answer from part 1 was not available (?)

import React from 'react'

const Header = (props) => (<h1>{props.name}</h1>)
// Do I need thoses brackets? or: " const Header = (props) => <h1>{props.name}</h1> " ?

const Part = ({part}) => (<p>{part.name} {part.exercises}</p>)

const Content = ({parts}) => (
  <div>
    {parts.map( part => <Part key={part.id} part={part} />)}
  </div>
)

const Sum = ({parts}) => (
  <p>
    Total: {parts.reduce( (sum,part) => sum + part.exercises,0)}
  </p>
)

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Sum parts={course.parts} />
  </div>
)

const Courses = ({courses}) => (
  <div>
    {courses.map( course => <Course key={course.id} course={course} />)}
  </div>
)

export default Courses