import Head from "next/head"
import Link from "next/link"
import React from "react"

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <main>
        <h1>Hello, Next.js!</h1>
        <p>About page</p>
        <Link href="/">Home page</Link>
      </main>
    </>
  )
}

export default About
