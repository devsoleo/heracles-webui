import React, { useState } from "react"

export default function TaskBoxSelector({ onChange }) {
  const [taskType, setTaskType] = useState("")

  const handleChange = (e) => {
    setTaskType(e.target.value)
    onChange(e.target.value)
  }

  return (
    <select onChange={handleChange} className="form-select">
      <option value="" selected disabled>Choose a mission type</option>
      <option value="0">Kill</option>
      <option value="1">Target</option>
      <option value="2">Go</option>
      <option value="3">Mini-game</option>
    </select>
  )
}