import { useTodos } from "contexts/todo"
import React, { useMemo } from "react"
import { onCheckboxChange } from "utils/onCheckboxChange"
import { Todo } from "./Todo"

export interface TodoItemProps {
	children: Todo
}

const TodoItemComponent = ({ children: todo }: TodoItemProps) => {
	const { setDone } = useTodos()

	const localTime = useMemo(
		() => (todo.doneTime ? new Date(todo.doneTime).toLocaleString() : ""),
		[todo.doneTime]
	)
	const toggleDone = () => {
		setDone(todo.id)(!todo.done)
	}

	return (
		<>
			<input type="checkbox" checked={todo.done} onChange={onCheckboxChange(setDone(todo.id))} />
			<span
				title={localTime}
				onClick={toggleDone}
				style={{ textDecoration: todo.done ? "line-through" : "auto", cursor: "default" }}
			>
				{todo.text}
			</span>
		</>
	)
}

export const TodoItem = React.memo(TodoItemComponent)
