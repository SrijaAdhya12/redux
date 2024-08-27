// import React from 'react'
// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { register } from '../features/auth/auth'

// const Register = () => {
// 	const dispatch = useDispatch()
// 	const [username, setUsername] = useState('')
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')
// 	const onSubmit = (e) => {
// 		e.preventDefault()
// 		console.log('register', username, email, password)
// 		dispatch(register({ username, email, password }))
// 		return (
// 			<div>
// 				<h1>Register</h1>
// 				<form onSubmit={onSubmit}>
// 					<input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
// 					<input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
// 					<input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
// 					<button type="submit">Sign Up</button>
// 				</form>
// 			</div>
// 		)
// 	}
// }

// export default Register
