// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import ReactApp2 from './components/section1/React2'
// import AsyncAwaitTest from './components/section1/AsyncAwait'
// import BioApp from './components/bio/BioApp'
// import Form from './components/bio/Form'
// import CheckBox from './components/checkbox/CheckBox'

// import ForwardRef from "./components/ForwardRef"
// import UseRef from "./components/UseRef"
// import Project1 from "./components/chellenge/Project1"
// import User from "./components/function3/User"

// import CountApp from "./components/Section2/useEffect/CountApp"

// import UseEffectUseState from "./components/Section2/useEffect/UseEffect&UseState"

// import UseEffectMUU from "./components/Section2/useEffect/UseEffectMUU"

// import RadioDropdown from "./components/radio6/RadioDropdown"
import Propagations from "./components/propagations"

function App() {
  // const [count, setCount] = useState(0)
  // const userHandler = (name) => {
  //     console.log(name)
  //     alert(name)
  // }

  // Building, bubble pahces
  // Bubbling, Capturing, and stopping propagation in React
  const grandParentEvent = (event) => {
    console.log("Grand Parent Event")
    alert("Grand Parent Event")
    event.stopPropagation()

  }
  const parentEvent = (event) => {
    console.log("Parent Event")
    alert("Parent Event")
    event.stopPropagation()
  }
  const childEvent = (event) => {
    console.log("Child Event")
    alert("Child Event")
    event.stopPropagation()
  }


  return (
    <>
      {/* <AsyncAwaitTest/> */}
      {/* <ReactApp2/> */}
      {/* <BioApp/> */}
      {/* <Form/> */}
      {/* <CheckBox/> */}
      {/* <RadioDropdown/> */}
      {/* <UseEffectMUU/> */}
      {/* <UseEffectUseState/> */}
      {/* <CountApp/> */}
      {/* <User userHandler={userHandler} name="Al Muksid"/>
      <User userHandler={userHandler} name="Mesion Sheikh"/>
      <User userHandler={userHandler} name="Mujahid" />
      <User userHandler={userHandler} name="Lemon Sheikh"/> */}
      {/* <UseRef/>    
      <ForwardRef/> */}
      {/* <Project1>
        
      </Project1> */}

      <Propagations grandParentEvent={grandParentEvent} parentEvent={parentEvent} childEvent={childEvent} />

    </>
  )
}

export default App
