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
