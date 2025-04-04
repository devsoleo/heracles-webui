import React, { createContext, useState, useContext } from 'react'

const LanguageContext = createContext()

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('enUS')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
