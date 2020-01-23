import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
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

const Statistics = (props) => {
  const [average, setAverage] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)
  if (props.good === 0 && props.bad === 0 && 
    props.neutral === 0) {
    return (
      <div>
        No feedback given
    </div>)
  } else {
    return (
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  good {props.good}
                </div>
                neutral {props.neutral}
              </div>
              bad {props.bad}
            </div >
            all {(props.good + props.bad + props.neutral)}
          </div >
          positive {
            (props.good + props.bad + props.neutral) === 0 ? 0 :
              props.good / (props.good + props.bad + props.neutral)}
        </div >
        average {(props.bad + props.good + props.neutral)
          === 0 ? 0 : (props.good - props.bad) /
          (props.bad + props.good + props.neutral)}
      </div >
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
      <button onClick={() => setGood(good + 1)}>
        good
            </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
            </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
            </button>
      <Header headery={statheader} />
      <Statistics bad={bad} good={good} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)