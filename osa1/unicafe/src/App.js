import { useState } from 'react'


const Statistics = ({good, neutral, bad}) => {

  const total = () => good + neutral + bad
  const avg = () => (good - bad) / total()
  const positive = () => (good / total()) * 100

  if (total() === 0) {
    return (
      <div>
        Palautetta ei ole annettu
      </div>
    )
  }
  return (
    <div>
      Hyvä: {good}<br/>
      Neutraali: {neutral}<br/>
      Huono: {bad}<br/>
      Yhteensä: {total()}<br/>
      Keskiarvo: {avg()}<br/>
      Positiivisia: {positive()}%
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
        <Statistics good={good} neutral={neutral} bad={bad} /> 
      </div>
    </div>
  )
}


export default App