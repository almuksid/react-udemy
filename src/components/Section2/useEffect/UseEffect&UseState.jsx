import { useEffect, useState } from "react"


const UseEffectUseState = () => {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)

    useEffect(() => {
        console.log("Component Mount")
        return () => {console.log("Component Unmount")}
    }, [])

    useEffect(() => {
        console.log("Component Updated")
        
    }, [count, data])


    return (
        <div>
            <h2>Use Effect using useState</h2>
            <h2>count: {count}</h2>
            <h2>data: {data}</h2>

            <button onClick={() => setCount(count + 1)}>Increase Counter</button>
            <button onClick={() => setData(data + 1)}>Increase Data</button>


        </div>
    )
}

export default UseEffectUseState
