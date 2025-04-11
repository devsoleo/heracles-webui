import AutoCompleteInput from "../AutoCompleteInput"

export default function TaskBoxKill({ step, type }) {
  return (
    <>
      <div className="col">
        <input className="form-control" type="number" id={ step + "-" + type + "-amount" } placeholder="Amount" />
      </div>
      <div className="col">
        <AutoCompleteInput id={ step + "-" + type + "-creature_id" } category="creature" placeholder="Unit name" />
      </div>
    </>
  )
}