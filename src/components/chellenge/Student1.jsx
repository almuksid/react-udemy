

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
