import { useTodos } from "contexts/todo"
import React from "react"
import { TodoItem } from "./TodoItem"

const TodoListComponent = () => {
	const { todos, setTodos } = useTodos()

	const clearTodos = () => {
		setTodos([])
	}

	return (
		<>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<TodoItem>{todo}</TodoItem>
					</li>
				))}
			</ul>
			<button onClick={clearTodos}>Clear</button>
		</>
	)
}

export const TodoList = React.memo(TodoListComponent)
