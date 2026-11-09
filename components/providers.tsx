"use client"

import { MotionConfig } from "motion/react"

/** App-wide client providers. Animations honour the OS "reduce motion" setting. */
export function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
