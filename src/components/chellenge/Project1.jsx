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
