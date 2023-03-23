import React from "react"
import Head from "next/head"
import Link from "next/link"
import { Button, Container, useTheme } from "@mui/material"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import {
  setThemeMode,
  themeModeSelector,
  toggleThemeMode
} from "@Store/slices/themeSlice"
import PageHeader from "@Components/PageHeader"

function Home() {
  const theme = useTheme()
  const dispatch = useDispatch()
  const themeMode = useSelector(themeModeSelector)

  function toggleTheme(e) {
    dispatch(toggleThemeMode())
  }

  return (
    <>
      <Head>
        <title>The Sheffield College | Next.js</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <PageHeader />
      <Container>
        <Button onClick={toggleTheme}>{themeMode}</Button>
      </Container>
    </>
  )
}
export default Home
