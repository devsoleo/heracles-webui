import React, { useState, useEffect } from "react"
import { AsyncTypeahead } from "react-bootstrap-typeahead"

import { useLanguage } from './LanguageContext'

export default function AutoCompleteInput({ id, placeholder, category, onChange, preload, parentId }) {
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

    fetch(`/api/search?category=${category}_preload&locale=${language}&parentId=${parentId}`)
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
          const params = new URLSearchParams({ category, query, locale: language })

          if (parentId) params.append('parentId', parentId)

          fetch(`/api/search?${params.toString()}`)
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