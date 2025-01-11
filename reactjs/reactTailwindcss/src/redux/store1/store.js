import { configureStore } from '@reduxjs/toolkit'
import counterslice from '../createSlice1/counterslice'

export default configureStore({
  reducer: {
    counter: counterslice
  }
})