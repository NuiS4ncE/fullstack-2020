


const notificationReducer = (state = '', action) => {
    //console.log('state in notificationReducer: ', state)
    //console.log('action in notificationReducer', action)

    switch (action.type) {
        case 'SET_EMPTY':
            return ''
        case 'VOTE_NOTIFICATION':
            console.log(action.notification)
            return [...state, `you voted ${action.data.anecdote} `]
        default:
            return state
    }
}

export const voteNotification = (anecdote) => {
    if (anecdote !== '') {
    return {
        type: 'VOTE_NOTIFICATION',
        data: {
            anecdote: anecdote.content,
            id: anecdote.id,
            votes: anecdote.votes
        }
    } 
    }
    else {
       return {
           type: 'SET_EMPTY'
       } 
    }
}


export default notificationReducer