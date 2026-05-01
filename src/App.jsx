import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ReactApp from './components/section1/React2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactApp/>
    </>
  )
}

export default App
