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


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const fbheader = 'give feedback'
  const statheader = 'statistics'
  const [average, setAverage] = useState(0)
  const [all, setAll] = useState(0)
  const [positive, setPositive] = useState(0)

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
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
                </div>
                good {good}
              </div>
              neutral {neutral}
            </div>
            bad {bad}
          </div>
          all {(good + bad + neutral)}
        </div>
        average {(bad + good + neutral) === 0 ? 0 : (good - bad) / (bad + good + neutral)}
      </div>
      positive {(good + bad + neutral) === 0 ? 0 :
      good/(good + bad + neutral)}
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)