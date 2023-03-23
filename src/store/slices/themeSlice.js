import { createSlice } from "@reduxjs/toolkit"
import themes from "@Store/themes"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light"
  },
  reducers: {
    setThemeMode(state, { payload }) {
      state.mode = payload
    },
    toggleThemeMode(state) {
      state.mode === "light" ? (state.mode = "dark") : (state.mode = "light")
    }
  }
})

export function themeSelector(state) {
  return themes[state.theme.mode]
}
export function themeModeSelector(state) {
  return state.theme.mode
}

export const { setThemeMode, toggleThemeMode } = themeSlice.actions
export default themeSlice.reducer
