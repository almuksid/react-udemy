

const User = ({userHandler, name}) => {

  return (
    <div>
      <button onClick={() => userHandler(name)}>Suscribe</button>
    </div>
  )
}

export default User
