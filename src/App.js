import React from 'react'
import TopPage from './components/pages/TopPage'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={TopPage} />
      </div>
    </BrowserRouter>
  )
}

export default App