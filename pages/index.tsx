import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Afeez Awoyemi - Frontend Engineer</title>
        <meta
          name="description"
          content="Software engineer with design inclination. I am passionate about building highly convenient, intuitive and user-friendly applications. I have more than four years of professional experience creating software solutions in frameworks such as  VueJS, Nuxt, Tailwind CSS, Typescript, GraphQL, Flutter, React, React-Native, and Node/Express."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero></Hero>
      </main>
    </>
  )
}
