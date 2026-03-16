'use client'

import { createContext, useContext, useState } from 'react'

interface IntroContextValue {
  introComplete: boolean
  setIntroComplete: (v: boolean) => void
}

// Default: introComplete = true → sulle pagine senza IntroProvider
// le animazioni partono normalmente senza aspettare nulla
export const IntroContext = createContext<IntroContextValue>({
  introComplete: true,
  setIntroComplete: () => {},
})

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <IntroContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </IntroContext.Provider>
  )
}

export function useIntro() {
  return useContext(IntroContext)
}