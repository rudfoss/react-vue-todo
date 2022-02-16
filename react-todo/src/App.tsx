import { ProvideTodoContext } from "contexts/todo"
import { NewTodo, TodoList } from "todo"

export const App = () => {
	return (
		<ProvideTodoContext>
			<h1>Todo list</h1>
			<NewTodo />
			<TodoList />
		</ProvideTodoContext>
	)
}
