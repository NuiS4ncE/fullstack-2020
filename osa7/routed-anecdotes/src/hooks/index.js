import { useState } from 'react'

export const useField = (type, redundant) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)

    }

    const reset = () => {
            setValue('')
        
    }

    return {
        type,
        value,
        onChange,
        reset
        }
}

// moduulissa voi olla monta nimettyä eksportia
/* export const emptyField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
} */