import "./steps.css"

export default function Steps({actualStep, doneSteps}) {
  const STEPS = ["Event", "Date", "Friends", "Confirm"]
  const classNames = array => array?.filter(Boolean).join(' ')
  const listSteps = STEPS.map((step, index) => {
    return(
        <div className={classNames([
            "stepper-item",
            actualStep === index && "active",
            doneSteps.includes(index) && "completed"
        ])} key={doneSteps[index]}>
          <div className="step-counter">{ index + 1 }</div>
          <div className="step-name">{ step }</div>
        </div>

    )
  })
  return(
    <div className="stepper-wrapper">
      { listSteps }
    </div>
  )
}
