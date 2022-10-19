import { configureStore } from "@reduxjs/toolkit";
import greetingSlice from './Redux/greeting'

const store = configureStore({
    reducer: {
        greetings: greetingSlice,
    }
})

export default store;