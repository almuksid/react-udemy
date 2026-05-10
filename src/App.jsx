import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ReactApp2 from './components/section1/React2'
import AsyncAwaitTest from './components/section1/AsyncAwait'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AsyncAwaitTest/>
      <ReactApp2/>

      
    </>
  )
}

export default App
