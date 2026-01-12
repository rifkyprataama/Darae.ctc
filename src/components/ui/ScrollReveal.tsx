'use client'
import { motion, useInView, useAnimation, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  fullWidth?: boolean
}

export default function ScrollReveal({
  children,
  width = 'fit-content',
  delay = 0.1,
  duration = 0.5,
  direction = 'up',
  className = "",
  fullWidth = false
}: ScrollRevealProps) {
  const ref = useRef(null)
  
  const isInView = useInView(ref, { margin: "-100px" }) 
  
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  const getVariants = (): Variants => {
    const distance = 50 

    const baseVariants: Variants = {
      hidden: { opacity: 0, x: 0, y: 0 },
      visible: { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { duration, delay, ease: "easeOut" }
      }
    }

    if (direction === 'up') {
        baseVariants.hidden = { opacity: 0, x: 0, y: distance }
    } else if (direction === 'down') {
        baseVariants.hidden = { opacity: 0, x: 0, y: -distance }
    } else if (direction === 'left') {
        baseVariants.hidden = { opacity: 0, x: distance, y: 0 }
    } else if (direction === 'right') {
        baseVariants.hidden = { opacity: 0, x: -distance, y: 0 }
    }
    
    return baseVariants
  }

  return (
    <div ref={ref} className={`${fullWidth ? 'w-full' : ''} ${className}`} style={{ width: fullWidth ? '100%' : width }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  )
}