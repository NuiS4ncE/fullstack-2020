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
          value={newTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        author: <input
          value={newAuthor}
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        url: <input
          value={newUrl}
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">create</button>
    </div>
  </form>
)

export default blogForm