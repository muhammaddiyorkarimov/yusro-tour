import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'

function App() {

  const routes = Routes()

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App