import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import { useLanguage } from './LanguageContext'

export default function AutoCompleteInput({ id, options, placeholder, onChange }) {
  const { language } = useLanguage()

  if (!options) return <></>

  options = options.filter((x) => x[".locale"] == language).map((x) => {
    return { creature: x[".name"], uid: x[".entry"] }
  })

  const [value, setValue] = useState([])
  const [uid, setUid] = useState(0)

  const handleChange = (selected) => {
    setValue(selected)

    setUid(selected[0]?.uid)

    if (onChange) {
      onChange({ target: { value: selected[0]?.uid } })
    }
  }

  return (
    <>
      <input type="hidden" id={id} value={uid} />

      <Typeahead
        labelKey="creature"
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        selected={value}
      />
    </>
  )
}