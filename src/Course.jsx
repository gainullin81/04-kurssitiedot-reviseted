// Course.js

import React from 'react';

const Course = ({ course }) => {
  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

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
      <p><strong>total of {totalExercises} exercises</strong></p>
    </div>
  );
};

export default Course;
