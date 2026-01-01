'use client'
import { createContext, useContext, useState } from 'react'

type CursorContextType = {
  isHovered: boolean
  setIsHovered: (value: boolean) => void
}

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
})

export const useCursor = () => useContext(CursorContext)

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </CursorContext.Provider>
  )
}