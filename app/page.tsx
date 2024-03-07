'use client'

import { useEffect, useRef } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import About from './components/AboutMe'
import Companies from './components/CompaniesWorked'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { Metadata } from 'next'

export default function Home() {
  const mainRef = useRef(null)

  useMousePosition()

  useEffect(() => {
    if (mainRef.current) {
      const LocomotiveScroll = require('locomotive-scroll').default
      const scroll = new LocomotiveScroll({
        el: mainRef.current,
        smooth: true,
        inertia: 0.9,
        smartphone: {
          smooth: false,
        },
      })

      return () => scroll.destroy()
    }
  }, [mainRef])

  return (
    <>
      <main data-scroll-container ref={mainRef}>
        <Hero className="-mt-16" />
        <About />
        <Companies />
        <Projects />
      </main>
    </>
  )
}
