'use client'
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorProvider } from "@/context/CursorContext"; 

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CursorProvider>
         {children}
      </CursorProvider>
    </ThemeProvider>
  )
}