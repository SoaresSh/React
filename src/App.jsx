import { useState } from 'react'
import { Home } from './pages/home'



export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

