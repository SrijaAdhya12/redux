import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
	return (
		<div className="mx-48 my-32 flex flex-col justify-center w-1/2 ">
			<h1 className="text-3xl font-bold pb-5">Todo App</h1>
			<AddTodo />
			<Todos />
		</div>
	)
}

export default App
