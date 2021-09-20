// FullStackOpen  - part1 - excercises 1.12, 1.13, 1.14
// by Carlos Massucci

import React, { useState } from 'react'

const BestAnecdote = ({sel,number,anecdotes}) => {
  return (
  <div>
    <h1>Most Voted Anecdote</h1>
    <p>{anecdotes[sel]}</p>
    <p>Number of votes: {number}</p>
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  
  const Vote = (sel) => {
    const copy = [...votes]
    copy[sel] += 1
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day </h1>
      {anecdotes[selected]}<br />
      <button onClick={() => setSelected(Math.floor(Math.random() * 7))}> NEXT </button>
      <button onClick={() => Vote(selected)}> VOTE </button><br />
      <BestAnecdote sel={votes.indexOf(Math.max(...votes))} number={Math.max(...votes)} anecdotes={anecdotes} />
    </div>
  )
}

export default App
