import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdoteVotes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const randomAnecdote = () => {
    const randNum = Math.floor(Math.random() * anecdotes.length)
    if (randNum === selected) return (randomAnecdote())
    setSelected(randNum)
    console.log(anecdoteVotes)
  }

  const voteAnecdote = () => {
    const newVotes = [...anecdoteVotes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxAnecdote = () => (anecdoteVotes.indexOf(Math.max(...anecdoteVotes)))

  return (
    <div>
      <div>
        <h2>Päivän anekdootti</h2>
        <p>{anecdotes[selected]}</p>
        <p>Anekdootilla on {anecdoteVotes[selected]} ääntä</p>
        <Button handleClick={() => voteAnecdote()} text="Äänestä" />
        <Button handleClick={() => randomAnecdote()} text="Seuraava anekdootti" />
      </div>
      <div>
        <h2>Äänestetyin anekdootti</h2>
        {anecdotes[maxAnecdote()]}
      </div>
    </div>
  )
}

export default App