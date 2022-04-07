// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
  // const usernameInputRef= React.useRef()

  function handleSubmit(event) {
    event.preventDefault()
    // 1. record the value of an input via `id`
    const value = event.target.usernameInput.value
    // 2. record the value of an input via `ref`
    // const value = usernameInputRef.current.value
    // 3. record the value of an input via `index`
    // const value = event.target.elements[0].value
    // note: this is dangerous for scalability as if there are more
    // than 1 element we will need to track all indexes

    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input 
        // ref={usernameInputRef} 
        id="usernameInput" 
        type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
