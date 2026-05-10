import { useEffect, useState } from "react"


export default function AsyncAwaitTest(){
    const [advice, setAdvice] = useState("")
    const [count, setCount] = useState(0)

    async function FetchUserData(){
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()
        // console.log(data.slip.advice)
        setAdvice(data.slip.advice)
        setCount((e) => e+1)
    }
    useEffect(function(){
        FetchUserData()
    }, [])

    return(
        <>
            <h2> Advice: {advice} </h2>
            <input onClick={()=> FetchUserData()} type="button" value="Get Advice" />
            <p>You have read {count} lines of advices</p>
        </>
    )
}