import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/TodoSlice'

const Todos = () => {
	const todos = useSelector((state) => state.todos)
	const dispatch = useDispatch()
	return (
		<>
			<h1 className="py-5 font-medium text-xl sm:text-2xl md:text-3xl">Todos</h1>
			<ul className="list-none p-0 m-0">
				{todos.map((todo) => (
					<li
						className="mt-4 flex flex-col sm:flex-row justify-between items-center bg-gray-100 border border-gray-300 rounded-lg px-4 py-4 shadow-sm"
						key={todo.id}
					>
						<span className="text-gray-800 flex-1">{todo.text}</span>
						<button
							className="mt-2 sm:mt-0 sm:ml-4 text-white bg-red-500 border-0 py-1 px-4 focus:outline-none rounded-lg"
							onClick={() => dispatch(deleteTodo(todo.id))}
						>
							X
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Todos
