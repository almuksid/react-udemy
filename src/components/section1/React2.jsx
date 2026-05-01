import { useEffect, useState } from "react";

export default function ReactApp2() {
    const [advice, setAdvice] = useState("")
    const [count, setCount] = useState(0)
    async function fetchUserData() {
        const responce = await fetch("https://api.adviceslip.com/advice")
        const data = await responce.json();
        // return data
        console.log(data.slip.advice)
        setAdvice(data.slip.advice)
        setCount((e)=>e +1)
    }
    useEffect(function(){
        fetchUserData()
    }, [])
    return(
        <>
            <h2>Async Await Function: {advice}</h2>
            <button onClick={fetchUserData} type="submit">Click me to Async Await Function Results</button>
            <p>You have read {count} pices of advice</p>
        </>
    )
}