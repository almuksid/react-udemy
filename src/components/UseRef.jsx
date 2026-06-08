import { useRef } from 'react'

const UseRef = () => {
  const countRef = useRef(0)
  const clickHandler = () => {
    countRef.current++;
    console.log(countRef.current)
  }
  return (
    <div>
      <h2>UseRef in ReactJS </h2>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default UseRef