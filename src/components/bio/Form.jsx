import { useState } from "react"

const Form = () => {
    const [name, setName] = useState("")

    
  return (
    <div>
      <h2>Todo Form</h2>
      <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
      <button type="submit">Create Todo</button>
        <p> You are: {name}</p>
    </div>
  )
}

export default Form
