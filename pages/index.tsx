import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/AboutMe'
import Nav from '../components/Nav'
import { useEffect, useRef } from 'react'
import Companies from '../components/CompaniesWorked'

export default function Home() {
  const mainRef = useRef(null)

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
      <Head>
        <title>Afeez Awoyemi - Frontend Engineer</title>
        <meta
          name="description"
          content="I am a frontend engineer who is passionate about building highly convenient, intuitive and user-friendly applications. I have more than four years of professional experience creating software solutions in frameworks such as  VueJS, Nuxt, Tailwind CSS, Typescript, GraphQL, Flutter, React, React-Native, and Node/Express."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main data-scroll-container ref={mainRef}>
        <Nav className="sticky top-0 z-10" />
        <Hero className="-mt-16" />
        <About />
        <Companies />
      </main>
    </>
  )
}
