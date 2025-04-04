import { useState } from "react"

import AutoCompleteInput from "../AutoCompleteInput"

// const zones = require("../../data/zones.json")
// const subzones = require("../../data/subzones.json")
const zones = []
const subzones = []
export default function TaskBoxGo({ step, type }) {

  const [selectedZone, setSelectedZone] = useState("")

  const handleChange = (e) => setSelectedZone(e.target.value)

  return (
    <>
      <div className="col">
        <AutoCompleteInput onChange={handleChange} id={ step + "-" + type + "-creature_id" } options={zones} placeholder="Zone" />
      </div>
      <div className="col">
        { selectedZone }
        <AutoCompleteInput id={ step + "-" + type + "-creature_id" } options={subzones.filter((x) => x[".parentId"] == selectedZone)} placeholder="Subzone" />
      </div>
    </>
  )
}