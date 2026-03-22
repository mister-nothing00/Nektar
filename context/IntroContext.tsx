'use client'

import { createContext, useContext, useState } from 'react'

interface IntroContextValue {
  introComplete: boolean
  setIntroComplete: (v: boolean) => void
}

const SESSION_KEY = 'nektar_intro_seen'

// Context per gestire lo stato dell'intro (completa o no)
export const IntroContext = createContext<IntroContextValue>({
  introComplete: true,
  setIntroComplete: () => {},
})

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState<boolean>(() => {
// Inizialmente, controlla se l'intro è già stata vista in questa sessione
    if (typeof window === 'undefined') return false
// Se è stata vista, restituisce true; altrimenti false
    return !!sessionStorage.getItem(SESSION_KEY)
  })

  return (
    <IntroContext.Provider value={{ introComplete, setIntroComplete }}>
      {children}
    </IntroContext.Provider>
  )
}

export function useIntro() {
  return useContext(IntroContext)
}