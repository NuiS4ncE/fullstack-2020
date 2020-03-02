

const notificationReducer = (state = 'ALL', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
        case 'NEW_ANECDOTE':
            state = `you've created a new anecdote`
            return state
        case 'VOTE':
            const id = action.data.id
            const anecdoteVoted = state.find(n => n.id === id)
            state = `you voted ${anecdoteVoted}`
            return state
        default:
            return state
    }
}

export const newNotification = () => {

    return {
        type: 'NEW_ANECDOTE'
    }
}

export const voteNotification = (id) => {

    return {
        type: 'VOTE', 
        data: {
            id
        }
    }
}


export default notificationReducer