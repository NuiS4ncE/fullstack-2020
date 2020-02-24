import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import './index.css'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogappUser')
    window.location.reload(false)
  }

  const loginForm = () => {
    return (
      <div>
        <h2>Log in to application</h2>
        <form onSubmit={handleLogin}>
          <div>
            username
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      </div>
    )


  }

  const logoutForm = () => {
    return (
      <form onSubmit={handleLogout}>
      <div>
        {user.name} logged in
          <button type="submit">logout</button>
      </div>
      </form>
    )
  }

  const blogFormRef = React.createRef()

  const blogForm = () => (
    <Togglable buttonLabel='create new blog' ref={blogFormRef}>
      <BlogForm
        newTitle={newTitle}
        newAuthor={newAuthor}
        newUrl={newUrl}
        handleTitleChange={({ target }) => setNewTitle(target.value)}
        handleAuthorChange={({ target }) => setNewAuthor(target.value)}
        handleUrlChange={({ target }) => setNewUrl(target.value)}
        handleSubmit={addBlog}
      />
    </Togglable>
  )

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      url: newUrl,
      title: newTitle,
      author: newAuthor,
      user: user.id
    }
    blogFormRef.current.toggleVisibility()
    blogService
      .create(blogObject)
      .then(returnedBlog => {
        setBlogs(blogs.concat(returnedBlog))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setErrorMessage(
          `a new blog ${newTitle} by ${newAuthor} added`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleAuthorChange = (event) => {
    setNewAuthor(event.target.value)
  }

  const handleUrlChange = (event) => {
    setNewUrl(event.target.value)
  }

  const addLikeOf = (id) => {
    const bloger = blogs.find(n => n.id === id)
    const changedBlog = {...bloger, likes: bloger.likes +1}
    
    blogService
    .update(changedBlog.id, changedBlog)
    .then(returnedBlog => {
      setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
    })
    .catch(error => {
      setErrorMessage(
        `Couldn't add a like to '${bloger.title}'`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const BlogMapping = () => {
    const bloggies = blogs.sort((a,b) => b.likes - a.likes)
    const mappedBlogs = bloggies.map(blog =>
      <Blog key={blog.id} blog={blog} 
      addLike={() => addLikeOf(blog.id)}/>
    )
      return (
        mappedBlogs
      )
  }
   

  const mappedBlogs = blogs.map(blog =>
    <Blog key={blog.id} blog={blog} 
    addLike={() => addLikeOf(blog.id)}/>
  )

  return (
    <div>
      <Notification message={errorMessage} />
      <h2>blogs</h2>
      {user === null ?
        loginForm() :
        <div>
          {logoutForm()}
          {blogForm()}
          {BlogMapping()}
        </div>
      }
    </div>
  )
}

export default App