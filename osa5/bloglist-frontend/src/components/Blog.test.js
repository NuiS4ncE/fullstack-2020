import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'


test('renders content', () => {
    const blog = {
        title: 'testing',
        author: 'testerman',
        url: 'www.lol',
        user: 'lol'
    }

    const component = render(
        <Blog blog={blog} />
    )


    expect(component.container).toHaveTextContent(
        'testerman',
        'testing',
    )
    const authort = component.container.querySelector('testerman')
    console.log(prettyDOM(authort))
    const titlet = component.container.querySelector('testing')
    console.log(prettyDOM(titlet))

})