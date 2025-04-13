import { useState } from "react"

import AutoCompleteInput from "../AutoCompleteInput"

export default function TaskBoxGo({ step, type }) {

  const [selectedZone, setSelectedZone] = useState("")

  const handleChange = (e) => setSelectedZone(e.target.value)

  return (
    <>
      <div className="col">
        <AutoCompleteInput id={ step + "-" + type + "-zone" } category="zone" placeholder="Zone" onChange={handleChange} />
      </div>
      <div className="col">
        <AutoCompleteInput
          id={ step + "-" + type + "-subzone" }
          key={selectedZone}
          category="subzone"
          preload={true}
          parentId={selectedZone}
          placeholder="Subzone" />
      </div>
    </>
  )
}