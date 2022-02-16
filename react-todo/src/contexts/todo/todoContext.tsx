import React, { createContext, useContext, useEffect, useState } from "react"
import { Todo } from "todo"
import { nanoid } from "nanoid"
import { useLocalStorage } from "utils/useLocalStorage"

export interface TodoContextProps {
	/**
	 * The last time the todo list was saved.
	 */
	lastSaved?: string
	todos: Todo[]

	setTodos: (newTodos: Todo[]) => unknown
	addTodo: (text: string) => unknown
	setDone: (todoId: string) => (done: boolean) => unknown
}

const TodoContext = createContext<TodoContextProps>(undefined as any)
TodoContext.displayName = "TodoContext"

export const useTodos = () => {
	const ctx = useContext(TodoContext)
	if (!ctx) throw new Error("TodoContext must be provided before use")
	return ctx
}

export interface ProvideTodoContextProps {
	key?: string
	children: React.ReactNode
}

const ProvideTodoContextComponent = ({ key = "todos", children }: ProvideTodoContextProps) => {
	const [todos, setTodos] = useLocalStorage<Todo[]>(key, [])
	const [lastSaved, setLastSaved] = useState<string>()

	useEffect(() => {
		setLastSaved(new Date().toISOString())
	}, [todos])

	const setDone = (todoId: string) => (done: boolean) => {
		setTodos(
			todos.map((todo) => {
				if (todo.id === todoId) {
					return {
						...todo,
						done,
						doneTime: done ? new Date().toISOString() : todo.doneTime
					}
				}
				return todo
			})
		)
	}

	const addTodo = (text: string) => {
		setTodos(
			todos.slice(0).concat([
				{
					id: nanoid(),
					text,
					done: false
				}
			])
		)
	}

	return (
		<TodoContext.Provider value={{ todos, setTodos, addTodo, setDone, lastSaved }}>
			{children}
		</TodoContext.Provider>
	)
}

export const ProvideTodoContext = React.memo(ProvideTodoContextComponent)
