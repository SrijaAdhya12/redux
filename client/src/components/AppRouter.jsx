import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages'
// import {Register} from '../components'
import LogIn from './Login'
import { AuthRoute, PrivateRoute } from '../../routes'
import Auth from '../features/auth/auth'

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthRoute LogIn />} />
            <Route path="/todos" element={<PrivateRoute Home />} />
            
		</Routes>
	)
}

export default AppRouter
