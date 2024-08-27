import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
	loading: false,
	user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
	error: null
}

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
	try {
		const response = await axios.post('https://phoenix-server.vercel.app/auth/signin', credentials)
		const { data } = response
		localStorage.setItem('user', JSON.stringify(data)) // Store user info in localStorage
		return data
	} catch (error) {
		const { data } = error.response
		return thunkAPI.rejectWithValue(data.error)
	}
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	localStorage.removeItem('user')
	return
})

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.user = null
				state.error = action.payload // Set error from rejected action payload
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null
				state.error = null
			})
	}
})

export default authSlice.reducer
