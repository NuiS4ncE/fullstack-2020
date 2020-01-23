import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const { handleClick} = props
  return (
    <button onClick={handleClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.headery}
      </h1>
    </div>
  )
}

const StatisticLine = (props) => {

  return (
    <div>
      {props.text} {props.value} 
    </div>
  )
}

const Statistics = (props) => {

  if (props.good === 0 && props.bad === 0 &&
    props.neutral === 0) {
    return (
      <div>
        No feedback given
    </div>)
  } else {
    return (
      <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="all" value={(props.good + props.bad + props.neutral)} />
        <StatisticLine text="average" value={(props.bad + props.good + props.neutral)
          === 0 ? 0 : (props.good - props.bad) /
          (props.bad + props.good + props.neutral)} />
        <StatisticLine text="positive" value={(props.good + props.bad + props.neutral) === 0 ? 0 :
          props.good / (props.good + props.bad + props.neutral)} />
      </div>
    )
  }
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const fbheader = 'give feedback'
  const statheader = 'statistics'
  
  return (

    <div>
      <Header headery={fbheader} />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Header headery={statheader} />
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)