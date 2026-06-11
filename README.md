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

## 04. Radio Button & Dropdown in React
```jsx
import { useState } from 'react'

const RadioDropdown = () => {
    const [gender, setGender] = useState("")
    const [country, setCountry] = useState("Bangladesh")
    let countries = ["Bangladesh", "Pakistan", "Soudi Arab", "Canada"]

    return (
        <div>
            <h2>Radio Button & Dropdown in ReactJS</h2>
            <h3>Select your gender</h3>
            <label htmlFor="">
                <input type="radio" value={'male'} name='gender' checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
                Male
            </label>
            <label htmlFor="">
                <input type="radio" value={'female'} name='gender' checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
                Female
            </label>
            <label htmlFor="">
                <input type="radio" value={' 3rd gender '} name='gender' checked={gender === "gender3rd"} onChange={(e) => setGender(e.target.value)} />
                3rd Gender
            </label>
            <p>Your selected gender is: {gender}</p>

            <div>
                <h2>Dropdown for Country</h2>
                <select onChange={(e) => setCountry(e.target.value)}>

                    {/* <option value="Bangladesh">Bangladesh</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="Canada">Canada</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                    <option value="Rasia">Rasia</option>
                    <option value="UK">UK</option> */}
                    {countries.map((c) => <option key={c}>{c}</option>)}
                </select>
                <p>The selected country is: {country}</p>
            </div>
        </div>
    )
}

export default RadioDropdown

```

# Section2. React Hooks

### List of popular react hooks: 
## Common React Events


| Num | State |
|--------|-------------|
| 1 | useState | 
| 2 | useEffect | 
| 3 | useContext | 
| 4 | useRef and forwordRef | 
| 5 | useReducer | 
| 6 | useMemo | 
| 7 |useCallback | 
| 8 | useLayoutEffect | 
### React Dev tool for react debuging

## 0. React Lifecycle has 3 main phaces

| Phase | Description |
|--------|-------------|
| **Mounting** | Component is being created and inserted into the DOM. |
| **Updating** | Component is being re-rendered due to state or props changes. |
| **Unmounting** | Component is being removed from the DOM. |

 ```jsx
componentDidMount() {
    console.log("Component Mounted")
}
 ``` 
 
 ```jsx
 componentDidUpdate(prevProps, prevState){
    console.log("Component Updated")
 }
 ```

```jsx
componentWithUnpound(){
    console.log("Component will be removed ")
}

 ```

## 1. useEffect
### 1. In modern React(with Hooks), we use useEffect() inside:
```jsx
useEffect(() => {}, []) - 1. mount
useEffect(() => {}, [state]) - 2. update on state changes
return () => {} - 3. unmount/clearup
```
### 2. How to work Life cycle method in useEffect, mounting updating unmounting inside use effect
```jsx
import { useEffect } from "react"


const UseEffectMUU = () => {
    const state = ("")
    useEffect(() => {
        console.log("Mount")
        return () => {console.log("Hello World")}
    }, [state])
  return (
    <div>
      <h2>Welcome to almuksid.com</h2>
    </div>
  )
}

export default UseEffectMUU
```
### 3. useEffect used by useState
```jsx
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

```
### 04. Use effect hooks based on the props 
CountApp.jsx
```jsx
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

```

CountS2.jsx
```jsx
import { useEffect } from "react";


function CountS2({ count, data }) {
    function countHandler() {
        console.log("Count Clicked")
    }


    function dataHandler() {
        console.log("Data Clicked")
    }

    useEffect(() => {
        countHandler();
    }, [count]);
    
    useEffect(() => {
        dataHandler();
    }, [data]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <h2>Data: {data}</h2>
        </div>
    )
}

export default CountS2

```
## What is forwardRef API?


# Function3
## 1. Function as props
1. Why do we need to pass functions as props from parent to child in React?
->Ans:  In React, we pass functions as props from a parent component to a child component when the child needs to trigger an action that updates data or state owned by the parent.

Why is this necessary?

React follows one-way data flow:

Parent ➜ Child (data flows down through props)
Child cannot directly modify the parent's state

So, if a child component needs to change something in the parent, the parent passes a function to the child, and the child calls that function when needed.

***Viva/Interview Answer
A child component communicates with its parent by calling a callback function passed down through props. The parent provides the function, and the child invokes it with data or event information. This allows the parent to update its state while maintaining React's one-way data flow.

2. How can a child component communicate back to the parent in React?
->Ans: A child component communicates back to the parent in React by calling a function that the parent passes down as a prop.

Since React uses one-way data flow, the child cannot directly change the parent's state. Instead, the parent gives the child a callback function, and the child calls that function when it wants to send data or trigger an action.

***Viva/Interview Answer
A child component communicates with its parent by calling a callback function passed down through props. The parent provides the function, and the child invokes it with data or event information. This allows the parent to update its state while maintaining React's one-way data flow.

App.jsx

```jsx

import User from "./components/function7/User"

function App() {
    const userHandler = (name) => {
        console.log(name)
        alert(name)
    }
  return (
    <>
      <User userHandler={userHandler} name="Al Muksid"/>
      <User userHandler={userHandler} name="Mesion Sheikh"/>
      <User userHandler={userHandler} name="Mujahid" />
      <User userHandler={userHandler} name="Lemon Sheikh"/>
    </>
  )
}

export default App

```

User.jsx
```jsx
const User = ({userHandler, name}) => {

  return (
    <div>
      <button onClick={() => userHandler(name)}>Suscribe</button>
    </div>
  )
}

export default User

```

---
# Event4. Complete Guide to Event Handling, Event Propagation, Bubbling, and Capturing in React.js
*What is event Handleing?*
Event Handling হলো এমন একটি প্রক্রিয়া, যেখানে React User-এর কোনো Event (যেমন Click, Change, Submit) শনাক্ত করে এবং তার প্রতিক্রিয়ায় একটি Function Execute করে। এর মাধ্যমে Application Interactive হয়।

*what is synthetic base event in react?*
Synthetic Event হলো React-এর তৈরি একটি Cross-Browser Event Object, যা Native Browser Event-কে Wrapper করে এবং সব Browser-এ একই API ব্যবহার করে Event Handle করার সুবিধা দেয়।

*Event Propagations*
Event Propagations refers to the process of how event propagate or travel through the dom hierarchy.

Event Propagations has 2 main phases in javascripts 
i) Capturing Phase
ii) Bubbling Phase

*Common React Events* 
| Event | Description |
|--------|-------------|
| `onClick` | When an element is clicked |
| `onChange` | When an input value changes |
| `onSubmit` | When a form is submitted |
| `onMouseOver` | When the mouse hovers over an element |
| `onKeyDown` | When a keyboard key is pressed |
| `onFocus` | When an input gets focus |
| `onBlur` | When an input loses focus |

*Examples*

```jsx
onClick
<button onClick={() => alert("Button Clicked!")}>   
  Click Me
</button>
onChange
<input
  type="text"
  onChange={(e) => console.log(e.target.value)}
/>
onSubmit
<form onSubmit={() => console.log("Form Submitted")}>
  <button type="submit">Submit</button>
</form>
onMouseOver
<h2 onMouseOver={() => console.log("Mouse Over")}>
  Hover Me
</h2>
onKeyDown
<input
  onKeyDown={() => console.log("Key Pressed")}
/>
onFocus
<input
  onFocus={() => console.log("Input Focused")}
/>
onBlur
<input
  onBlur={() => console.log("Input Lost Focus")}
/>
```

Event Propagations has 2 main phases. We are discuss how to it work?
*i) Capturing Phase*

App.jsx
```jsx
import Propagations from "./components/propagations"

function App() {
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
      <Propagations grandParentEvent={grandParentEvent} parentEvent={parentEvent} childEvent={childEvent}/>
    </>
  )
}

export default App
```

// Propagations.jsx
```jsx
import "./EvP.css"

const Propagations = ({ grandParentEvent, parentEvent, childEvent }) => {
  return (
    <div>
      <h2>Event Propagation in React</h2>
      <div className="g-div" onClickCapture={grandParentEvent}>
        <div className="p-div" onClickCapture={parentEvent}>
          <div className="c-div" onClickCapture={childEvent}>
            Child Div
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propagations
```
*ii) Bubbling Phase # Bubbling, Capturing, and stopping propagation in React*
App.jsx
```jsx

import Propagations from "./components/propagations"

function App() {
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
      <Propagations grandParentEvent={grandParentEvent} parentEvent={parentEvent} childEvent={childEvent}/>
    </>
  )
}

export default App

```

// Propagations.jsx
```jsx
import "./EvP.css"

const Propagations = ({ grandParentEvent, parentEvent, childEvent }) => {
  return (
    <div>
      <h2>Event Propagation in React</h2>
      <div className="g-div" onClick={grandParentEvent}>
        <div className="p-div" onClick={parentEvent}>
          <div className="c-div" onClick={childEvent}>
            Child Div
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propagations
```
---


# 4.0. useRef Hook

*** What is useRef in React?

useRef হলো React-এর একটি Hook যা component re-render হলেও value ধরে রাখে। এটি মূলত DOM element access করার জন্য এবং এমন value store করার জন্য ব্যবহার করা হয় যেগুলো পরিবর্তন হলেও component re-render হওয়ার প্রয়োজন নেই। useRef এর value current property-এর মধ্যে থাকে।

*** Why use useRef?

useRef ব্যবহার করা হয় DOM element access করার জন্য এবং এমন value সংরক্ষণ করার জন্য যা component re-render ছাড়াই persist থাকবে। useRef-এর value পরিবর্তন হলেও component re-render হয় না।

Ex(i). DOM Element Access করার জন্য

ধরুন, button-এ click করলে input field-এ cursor (focus) চলে যাবে।
```jsx
import { useRef } from "react";

function App() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
}
```
Ex(ii). Value Store করার জন্য (Re-render ছাড়া)
```jsx
import { useRef } from "react";

function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}
```

# 4.1.  forwardRef in reactJS

# 5. useFormStatus Hook in ReactJS
# 6. useTransition Hook in ReactJS
# 7. React Memo
# 8. useMemo Hook
# 9. useCallback Hook
# 10. Update Array in useState
# 11. Update Object in useState
# 12. React props Children
# 13. State Lifting



# Chellenge1. Passing Data and Children in React
project1.jsx
```jsx
import students from "../../api/student.json"
import Student1 from "./Student1"
const Project1 = () => {
    return (
        <div>
            <h2>Challenge 1</h2>
            <Student1 students={students}>
            
            <h2> The Al Muksid </h2>
            <p>We are passing a simple student object </p>
            </Student1>
        </div>
    )
}

export default Project1

```
student1.jsx
```jsx
const Student1 = ({ students, children }) => {
    return (
        <div>
            {students.students.map((student) => (
                <div key={student.id}>
                    <h3>name: {student.name}</h3>
                    <p>email: {student.email}</p>
                    <p>phone: {student.phone_number}</p>

                    <p>Spblicer: {children}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default Student1

```
