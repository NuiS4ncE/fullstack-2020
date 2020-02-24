import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, addLike, removeBlog }) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    const toggleBlog = () => (
        <Togglable buttonLabel='view'>
            <div>
                {blog.url}
                <div>
                    likes {blog.likes} <button onClick={addLike}>like</button>
                </div>
                {blog.user.name}
            </div>
            <button onClick={removeBlog}>remove</button>
        </Togglable>
    )

    return (
        <div style={blogStyle}>
            <div>
                {blog.title} {blog.author}
                {toggleBlog()}
            </div>
        </div>
    )

}

export default Blog