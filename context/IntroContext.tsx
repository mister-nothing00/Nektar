'use client'

import { createContext, useContext, useState } from 'react'

interface IntroContextValue {
  introComplete: boolean
  setIntroComplete: (v: boolean) => void
}

// Contesto per gestire lo stato dell'intro cinematografico — permette di sapere se l'intro è completa e di aggiornare questo stato, in modo che altri componenti possano reagire di conseguenza (es. avviare animazioni o video solo dopo l'intro)
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