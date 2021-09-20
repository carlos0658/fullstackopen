// FullStackOpen  - part1 - excercises 1.6, 1.7, 1.8, 1.9, 1.10, 1.11
// by Carlos Massucci

import React, { useState } from 'react'

const Header = () => <h1>Give Feedback</h1>
const Button = ({name,handleClick}) => <button onClick={handleClick}>{name}</button>
const StatisticLine = ({text,value}) => <tr><td>{text}</td><td>{value}</td></tr>
const Stats = ({g,n,b}) => {
  if ((g+n+b) === 0) {
    return <p>No feedback given</p>
  }
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={g} />
        <StatisticLine text='Neutral' value={n} />
        <StatisticLine text='Bad' value={b} />
        <StatisticLine text='Total' value={g+n+b} />
        <StatisticLine text='Average' value={(g-b)} />
        <StatisticLine text='Positive (%)' value={g/(g+n+b)} />
      </tbody>
    </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <div>
      <Header />
      <Button name='Good' handleClick={handleGoodClick} />
      <Button name='Neutral' handleClick={handleNeutralClick}  />
      <Button name='Bad' handleClick={handleBadClick}  />
      <Stats g={good} n={neutral} b={bad} />
    </div>
  )
}

export default App