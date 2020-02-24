import React from 'react'
import { render, fireEvent } from '@testing-library/react'
//import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

// ...

test('clicking the button calls event handler once', async () => {
    const blog = {
        title: 'Component testing is done with react-testing-library',
        author: 'some guy',
        url: 'www.lol.lol.lol.lol.lol',
        user: 'lol',
        likes: 0
    }

    const mockHandler = jest.fn()

    const component = render(
        <Blog blog={blog} addLike={mockHandler} />
    )

    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
})