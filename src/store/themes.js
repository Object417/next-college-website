import { createTheme } from "@mui/material"
import _ from "lodash"

const themes = {}

const commonTheme = {
  palette: {
    // primary: {
    //   main: "#FDD204",
    // }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      }
    }
  }
}

;["light", "dark"].forEach((mode) => {
  themes[mode] = createTheme(
    _.merge({}, commonTheme, {
      palette: { mode }
    })
  )
})

console.log(themes)

export default themes
