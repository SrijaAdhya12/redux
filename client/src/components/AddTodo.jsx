import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/TodoSlice'

const AddTodo = () => {
	const [input, setInput] = useState('')
	const dispatch = useDispatch()
	const addTodoHandler = (e) => {
		e.preventDefault()
		dispatch(addTodo(input))
		setInput('')
	}
	return (
		<form className="space-x-3" onSubmit={addTodoHandler}>
			<input
				className="bg-gray-300 focus:border-indigo-500 text-base outline-none text-gray-800 py-1 px-3 leading-8 rounded-lg w-1/2"
				type="text"
				placeholder="Enter a Todo.."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className="text-white bg-indigo-500 border-0 py-2 px-6  rounded-lg focus:outline-none hover:bg-indigo-600"
				type="submit"
				placeholder="Enter a Todo.."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			>
				Add Todo
			</button>
		</form>
	)
}

export default AddTodo
