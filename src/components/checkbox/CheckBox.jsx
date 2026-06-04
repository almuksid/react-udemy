import { useState } from 'react'

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
                css
            </label>
            <label htmlFor="">
                <input type="checkbox" checked={check.js} onChange={jsHandler} />
                JS
            </label>
            <button onClick={resetHandler}>Reset</button>
            <h2>{(check.html || check.css || check.js) && <h1>Results</h1>}</h2>
            <ul>
                {check.html && <p>Html</p>}
                {check.css && <p>css</p>}
                {check.js && <p>js</p>}
            </ul>
        </div>
    )
}

export default CheckBox
