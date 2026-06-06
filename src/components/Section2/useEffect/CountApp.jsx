import { useState } from 'react'
import CountS2 from './CountS2'

const CountApp = () => {
    const [count,setCount] = useState(0)
    const [data, setData] = useState(0)


  return (
    <div>
      <CountS2 count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  )
}

export default CountApp
