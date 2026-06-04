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
