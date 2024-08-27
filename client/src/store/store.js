import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/TodoSlice'
import authReducer from '../features/auth/auth'

export const store = configureStore({
	reducer: todoReducer,
	authReducer
})
