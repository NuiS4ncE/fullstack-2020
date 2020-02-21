import React from 'react'

const Blog = ({ blog }) => {

    return (
        <div>
            <Content content={blog} />
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            {props.blog}
        </div>
    )
}

export default Blog