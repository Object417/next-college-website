import React, { Component } from "react"

import Head from "next/head"

import _ from "lodash"

import { Provider as StoreProvider, useSelector } from "react-redux"
import store from "@Store/store"
import { themeSelector } from "@Store/slices/themeSlice"

import { ThemeProvider, CssBaseline } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

function ThemeWrapper({ children }) {
  const theme = useSelector(themeSelector)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ThemeWrapper>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
        <CssBaseline />
      </ThemeWrapper>
    </StoreProvider>
  )
}

export default App
