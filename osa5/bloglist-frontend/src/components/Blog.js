import React from 'react'
import Togglable from './Togglable'

const Blog = ({ blog, addLike }) => {
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
    }

    return (
        <div style={blogStyle}>
            <div>
                {blog.title} {blog.author}
                <Togglable buttonLabel='view'>
                    <div>
                        {blog.url}
                        <div>
                        </div>
                        <div>
                        likes {blog.likes} <button onClick={addLike}>like</button>
                        </div>
                        {blog.user.name}
                    </div>
                </Togglable>
            </div>
        </div>
    )
}

export default Blog