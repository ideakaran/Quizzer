import React, { useState } from 'react'
import './App.css'

function App (): JSX.Element {
  const [count] = useState(0)

  return (
    <div className="App">
      {count}
    </div>
  )
}

export default App
