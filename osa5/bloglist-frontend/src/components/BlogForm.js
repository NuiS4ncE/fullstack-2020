import React from 'react'


const blogForm = ({
    handleTitleChange,
    handleAuthorChange,
    handleUrlChange,
    newTitle,
    newAuthor,
    newUrl,
    handleSubmit
}) => (
    <form onSubmit={handleSubmit}>
        <h2>create new</h2>
        <div>
            <div>
          title: <input
                    id="title"
                    value={newTitle}
                    onChange={handleTitleChange}
                />
            </div>
            <div>
          author: <input
                    id="author"
                    value={newAuthor}
                    onChange={handleAuthorChange}
                />
            </div>
            <div>
          url: <input
                    id="url"
                    value={newUrl}
                    onChange={handleUrlChange}
                />
            </div>
            <button id="create-button" type="submit">create</button>
        </div>
    </form>
)

export default blogForm