import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../features/todo/TodoSlice'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
		<>
			<div>Todos</div>
			{todos.map((todo) => (
                <li className='' key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
                </li>
			))}
			
		</>
	)  
}

export default Todos