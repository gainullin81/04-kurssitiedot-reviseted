//2.1: course information step6


import { useState } from 'react'
const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map(part => (
          <p key={part.id}>
            {part.name} - {part.exercises} exercises
          </p>
        ))}
      </div>
    </div>
  );
};
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

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App