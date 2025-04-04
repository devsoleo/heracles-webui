import React, { useState, useEffect } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"

import { useLanguage } from './LanguageContext'

export default function AutoCompleteInput({ id, placeholder, type, onChange, preload, parentId }) {
  const { language } = useLanguage()

  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState([])
  const [oldValue, setOldValue] = useState([{ name: "" }])
  const [uid, setUid] = useState(undefined)
  const [options, setOptions] = useState([])

  const handleChange = (selected) => {
    setValue(selected)
    setUid(selected[0]?.entry)

    if (onChange) onChange({ target: { value: selected[0]?.entry } })
  }

  const handleBlur = () => {
    if (uid == undefined) {
      setValue(oldValue)
    } else {
      setOldValue(value)
    }
  }

  useEffect(() => {
    if (!preload) return
    if (!parentId) return

    setIsLoading(true)

    fetch(`http://localhost:8080/search?type=${type}_preload&lang=${language}&parentId=${parentId}`)
      .then(resp => resp.json())
      .then(json => {
        if (json == null) return

        setOptions(json)
      }).finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {uid !== undefined && (
        <input type="hidden" id={id} value={uid} />
      )}

      <AsyncTypeahead
        labelKey={option => `${option.name}`}
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        placeholder={placeholder}
        selected={value}
        isLoading={isLoading}
        minLength={0}
        useCache={false}
        onSearch={(query) => {
          setIsLoading(true)
          const params = new URLSearchParams({ type, query, lang: language })

          if (parentId) params.append('parentId', parentId)

          fetch(`http://localhost:8080/search?${params.toString()}`)
            .then(resp => resp.json())
            .then(json => {
              if (json == null) return

              setOptions(json)
            }).finally(() => setIsLoading(false))
        }}
      />
    </>
  )
}