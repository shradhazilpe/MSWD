import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Name of Course is: {props.course} </p>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>Name of part is: {props.p} and number of Exercises in this part: {props.ex} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p = {props.parts[0].name} ex = {props.parts[0].exercises} />
      <Part p = {props.parts[1].name} ex = {props.parts[1].exercises} />
      <Part p = {props.parts[2].name} ex = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce(function(sum, parts) { return sum + parts.exercises }, 0)
  return (
    <div>
      <p>Total number of exercises: {total} </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
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


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App


