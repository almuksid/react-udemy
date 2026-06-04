# Section1
1. Convention => Convention is a commonly adopted rule or practice that a community or programming group agrees upon, so that writing and understanding code becomes easier. In short, it's a standard naming, styling, or behavioral practice that everyone follows.
2. async function স্বয়ংক্রিয়ভাবে একটি প্রমিস রিটার্ন করে।
```js
async function getNumberAsync() {
  return 42;
```
3. await ব্যবহার করে আমরা সেই প্রমিসটির রেজাল্ট পাই এবং সেটিকে একটা সাধারণ মানের মতো ব্যবহার করতে পারি।
```js
async function printNumber() {
  const number = await getNumberAsync();
  console.log(number);
}
```
4. 
 
## 02. Async, Await & Fetch call with useState and useEffect
```
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
            <Messages count={count} />
        </>
    )
}

function Messages(props) {
    return(
        <p>You have read {props.count} lines of advices</p>
    )
}
```

## 03. Checkbox in React
```react
// import React from 'react'

import { useState } from "react"

const CheckBox = () => {
    const [check, setCheck] = useState({
        html: true,
        css: false,
        js: false

    })
    const htmlHandler = (e) => {
        setCheck({ ...check, html: e.target.checked })
    }
    const cssHandler = (e) => {
        setCheck({ ...check, css: e.target.checked })
    }
    const jsHandler = (e) => {
        setCheck({ ...check, js: e.target.checked })
    }
    const resetHandler = () => {
        setCheck({
            html: false,
            css: false,
            js: false
        })
    }

    return (
        <div>
            <h2>Checkbox in React</h2>
            <label htmlFor="">
                <input type="checkbox" checked={check.html} onChange={htmlHandler} />
                HTML
            </label>
            <label htmlFor="">
                <input type="checkbox" checked={check.css} onChange={cssHandler} />
                CSS
            </label>
            <label htmlFor="">
                <input type="checkbox" checked={check.js} onChange={jsHandler} />
                JS
            </label>
            <button onClick={resetHandler}>Reset</button>

            <h2>{(check.html || check.css || check.js)  && <h1>RESULTS</h1>}</h2>
            <ul>
                {check.html && <h2>Html</h2>}
                {check.css && <h2>Css</h2>}
                {check.js && <h2>Js</h2>}
            </ul>

        </div>
    )
}

export default CheckBox
```

