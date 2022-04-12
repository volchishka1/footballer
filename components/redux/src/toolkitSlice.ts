import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  countries: [],
  isLoading: false
}

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState,
  reducers: {
    getCountriesFetch: (state) => {
      state.isLoading = true
    },
    getCountriesSuccess: (state, action) => {
      state.countries = action.payload
      state.isLoading = false
    },
    getCountriesFail: (state) => {
      state.isLoading = false
    },
    getCountriesFinally: (state) => {
      state.isLoading = false
    },
    increment(state) {
      state.count = state.count + 1
    },
    decrement(state) {
      state.count = state.count - 1
    }
  }
})
export default toolkitSlice.reducer;
export const {increment, decrement, getCountriesFetch, getCountriesSuccess, getCountriesFail, getCountriesFinally} = toolkitSlice.actions