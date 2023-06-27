import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = () => {
    setGood(good + 1)
  }
  const addToNeutral = () => {
    setNeutral(neutral + 1)
  }
  const addToBad = () => {
    setBad(bad + 1)
  }

  const total = () => good + neutral + bad
  const avg = () => {
    if (total() === 0) return (0)
    return ((good - bad) / total())
  }
  const positive = () => {
    if (total() === 0) return (0)
    return ((good / total()) * 100)
  }


  return (
    <div>
      <div>
        <h1>Anna palautetta</h1>
          <Button handleClick={() => addToGood()} text="Hyvä" />
          <Button handleClick={() => addToNeutral()} text="Neutraali" />
          <Button handleClick={() => addToBad()} text="Huono" />
      </div>
      <div>
        <h2>Palautteiden statistiikkaa</h2>
        <p>
          Hyvä: {good}<br/>
          Neutraali: {neutral}<br/>
          Huono: {bad}<br/>
          Yhteensä: {total()}<br/>
          Keskiarvo: {avg()}<br/>
          Positiivisia: {positive()}%
        </p>
      </div>
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

export default App