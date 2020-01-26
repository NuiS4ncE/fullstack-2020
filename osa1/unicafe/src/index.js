import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const { handleClick } = props
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
    <table>
      <tbody>
        <tr>
          <td>{props.text1}</td><td>{props.value1}</td>
        </tr>
        <tr>
          <td>{props.text2}</td><td>{props.value2}</td>
        </tr>
        <tr>
          <td>{props.text3}</td><td>{props.value3}</td>
        </tr>
        <tr>
          <td>{props.text4}</td><td>{props.value4}</td>
        </tr>
        <tr>
          <td>{props.text5}</td><td>{props.value5}</td>
        </tr>
        <tr>
          <td>{props.text6}</td><td>{props.value6}</td>
        </tr>
      </tbody>
    </table>
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
        <StatisticLine text1="good" value1={props.good}
          text2="bad" value2={props.bad}
          text3="neutral" value3={props.neutral}
          text4="all" value4={(props.good + props.bad + props.neutral)}
          text5="average" value5={(props.bad + props.good + props.neutral)
            === 0 ? 0 : (props.good - props.bad) /
            (props.bad + props.good + props.neutral)}
          text6="positive" value6={(props.good + props.bad + props.neutral) === 0 ? 0 :
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