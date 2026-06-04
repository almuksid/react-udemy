import {useState} from 'react'
import Bio from './Bio'

const BioApp = () => {
    const [show, setShow] = useState(true)
  return (
    <div>

        <h2> Al Muksid</h2>
        <button onClick={() => setShow(!show)}>{show? "Hide": "Show"}</button>
        { show && <Bio/>}

    </div>
  )
}

export default BioApp
