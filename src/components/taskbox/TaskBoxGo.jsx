import { useState } from "react"

import AutoCompleteInput from "../AutoCompleteInput"

export default function TaskBoxGo({ step, type }) {

  const [selectedZone, setSelectedZone] = useState("")

  const handleChange = (e) => setSelectedZone(e.target.value)

  return (
    <>
      <div className="col">
        <AutoCompleteInput id={ step + "-" + type + "-creature_id" } type="zone" placeholder="Zone" onChange={handleChange} />
      </div>
      <div className="col">
        <AutoCompleteInput
          id={ step + "-" + type + "-creature_id" }
          key={selectedZone}
          type="subzone"
          preload={true}
          parentId={selectedZone}
          placeholder="Subzone" />
      </div>
    </>
  )
}