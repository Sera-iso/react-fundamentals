// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.usernameInput.value

    onSubmitUsername(value)
  }

  function handleChange(event) {
    const { value } = event.target
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
    }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
        onChange={handleChange}
        id="usernameInput" 
        type="text" />
      </div>
      <div style= {{color: 'red'}}>{error}</div>
      <button disabled={Boolean(error)}type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
