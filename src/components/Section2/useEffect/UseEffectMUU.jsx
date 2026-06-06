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
