const Course = ({ course }) => {
  const sum = course.parts.reduce((prevVal, currentVal) => {
    return prevVal += currentVal.exercises;
  }, 0);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={sum} />
    </div>
  )
}

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <h4>total of {sum} exercises</h4>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
    )}
  </>

export default Course;