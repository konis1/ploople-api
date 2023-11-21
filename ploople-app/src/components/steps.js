import "./steps.css"


function range(size, startAt = 1) {
  return [...Array(size).keys()].map(i => i + startAt);
}

export default function Steps(actualStep) {
  const STEPS = ["Event", "Date", "Friends", "Confirm"]
  let stepsDone = range(STEPS.length - actualStep.actualStep)
  console.log(stepsDone);
  const classNames = array => array?.filter(Boolean).join(' ')
  const listSteps = STEPS.map((step, index) => {
    return(
        <div className={classNames([
            "stepper-item",
            actualStep.actualStep === index + 1 && "active"
        ])} key={index}>
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
