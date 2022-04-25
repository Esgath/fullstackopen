import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {setGood(good + 1)};
  const handleClickNeutral = () => {setNeutral(neutral + 1)};
  const handleClickBad = () => {setBad(bad + 1)};

  return (
    <div>
      <Header text="Give feedback"/>
      <Button handleClick={handleClickGood} text="good"/>
      <Button handleClick={handleClickNeutral} text="neutral"/>
      <Button handleClick={handleClickBad} text="bad"/>
      <Header text="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all * 100).toString() + " %";
  if(all === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" statValue={good}/>
          <StatisticLine text="neutral" statValue={neutral}/>
          <StatisticLine text="bad" statValue={bad}/>
          <StatisticLine text="all" statValue={all}/>
          <StatisticLine text="average" statValue={average}/>
          <StatisticLine text="positive" statValue={positive}/>
        </tbody>
      </table>
    </div>
  )
}
const StatisticLine = ({text, statValue}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{statValue}</td>
    </tr>
  )
}

export default App;