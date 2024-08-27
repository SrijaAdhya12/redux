import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Todos, Home } from '../pages'
import { AuthRoute, PrivateRoute } from '../../routes'
import Login from './Login'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/todos" element={<Todos />} />
		</Routes>
	)
}

export default AppRouter
