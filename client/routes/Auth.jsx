import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Auth = ({ component }) => {
	const user = useSelector((state) => state.auth.user) // Adjust to match your slice name
	return user ? <Navigate to="/" /> : component
}

export default Auth
