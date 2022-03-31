// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const smallBox = <div className="box box--small">small lightblue box</div>
const mediumBox = <div className="box box--medium">medium pink box</div>
const largeBox = <div className="box box--large">large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
