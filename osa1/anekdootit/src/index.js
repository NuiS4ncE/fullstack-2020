import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const points = [0, 0, 0, 0, 0, 0]
const copy = { ...points }


const App = (props) => {
    const [selected, setSelected] = useState(0)
    return (
        <div>
            <Header header='Anecdote of the day' />
            <div>
                {props.anecdotes[selected]}
                <div>
                    <div>
                        has {copy[selected]} points
                </div>
                    <Button handleClick={() => copy[selected] += 1} text="vote"></Button>
                    <Button handleClick={() => setSelected(Randomize())} text="next anecdote"></Button>
                </div>
                <div>
                    <Header header='Anecdote with most votes' />
                </div>
                <div>
                    {anecdotes[savenum]}
                    <div>
                        has {MaxArray()} votes
                    </div>
                </div>
            </div>
        </div>
    )
}

var savenum = 0

const MaxArray = () => {
    var maxnum = 0
    for (var i = 0; i <= maxnum; i++) {
        if (copy[i] > maxnum) {
            maxnum = copy[i]
            savenum = i
        }
    }
    return (
        maxnum
    )
}

const Header = (props) => {

    return (
        <div>
            <h1>
                {props.header}
            </h1>
        </div>
    )
}

const Randomize = (props) => {
    return (
        Math.floor(Math.random() * 6)
    )
}

const Button = (props) => {
    const { handleClick } = props
    return (
        <button onClick={handleClick}>
            {props.text}
        </button>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)