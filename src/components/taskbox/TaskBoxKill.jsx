import AutoCompleteInput from "../AutoCompleteInput"

// const creatures = require("../../data/creatures-unique.json")
const creatures = []
export default function TaskBoxKill({ step, type }) {
  return (
    <>
      <div className="col">
        <input className="form-control" type="number" id={ step + "-" + type + "-amount" } placeholder="Amount" />
      </div>
      <div className="col">
        <AutoCompleteInput id={ step + "-" + type + "-creature_id" } options={creatures} placeholder="Unit name" />
      </div>
    </>
  )
}