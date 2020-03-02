import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'
import Notification from './Notification'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id) => {
        //console.log('vote', id)
        const anecdoteToChange = anecdotes.find(n => n.id === id)
        dispatch(voteNotification(anecdoteToChange))
        setTimeout(() => { 
            dispatch(voteNotification(''))
        }, 5000)
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

        <div>
            <Notification timeout={5000}/>
            <div>
                {anecdoteSort()}
            </div>
        </div>

    )
}

export default AnecdoteList