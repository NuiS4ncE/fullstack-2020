import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        //event.preventDefault()
        console.log('vote', id)

        dispatch(voteAnecdote(id))
    }

    const anecdoteSort = () => {

        const anecdotties = anecdotes.sort((a, b) => b.votes - a.votes)
        const mappedAnecdotes = anecdotties.map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
        )
        return (
            mappedAnecdotes
        )
    }
    return (
        <div>{anecdoteSort()}</div>
    )
}

export default AnecdoteList