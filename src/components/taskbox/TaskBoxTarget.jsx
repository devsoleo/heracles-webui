import { useState } from "react"
import AutoCompleteInput from "../AutoCompleteInput"
// const creatures = require("../../data/creatures-unique.json")
const creatures = []

export default function TaskBoxTarget({ step, type }) {
  const [ targetType, setTargetType ] = useState("")

  const handleChange = (e) => setTargetType(e.target.value)

  return (
    <>
      <div className="col">
        <select onChange={handleChange} className="form-select">
          <option value="" selected disabled>Choose a target type</option>
          <option value="1">Unit</option>
          <option value="2">Player</option>
        </select>
      </div>

      <div className="col">
      {
        targetType == "1" && (
          <AutoCompleteInput id={step + "-" + type + "-creature_id"} options={creatures} placeholder="Unit name" />
        )
      }
      {
        targetType == "2" && (
          <input className="form-control" type="text" id={step + "-" + type + "-player_name"} placeholder="Player name" />
        )
      }
      {
        targetType != "1" && targetType != "2"
      }
      </div>
    </>
  )
}