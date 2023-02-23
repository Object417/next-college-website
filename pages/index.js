import React from "react"
import Head from "next/head"
import Link from "next/link"

function Home() {
  return (
    <>
      <Head>
        <title>Next College Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello, Next.js!</h1>
        <Link href="/about">About</Link>
      </main>
    </>
  )
}
export default Home
