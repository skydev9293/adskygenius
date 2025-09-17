"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

interface PageLoadingWrapperProps {
  children: React.ReactNode
}

export function PageLoadingWrapper({ children }: PageLoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [pathname])

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold text-foreground">AdSky Genius</h2>
            <p className="text-sm text-muted-foreground">Loading your experience...</p>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}